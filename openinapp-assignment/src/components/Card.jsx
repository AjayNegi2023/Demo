import React, { useState } from "react";
import Papa from "papaparse";
import icon from "../assets/Icon.png";
import excelicon from "../assets/Frame 7682.png";

const Card = () => {
  const [csvData, setCsvData] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [uploadedFileName, setUploadedFileName] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
      Papa.parse(file, {
        complete: (result) => {
          if (!result.data || result.data.length < 2) {
            console.error("Invalid CSV file format.");
            return;
          }

          const expectedColumns = [
            "id",
            "links",
            "prefix",
            "select tags",
            "selected tags",
          ];
          const fileColumns = Object.keys(result.data[0]);

          if (!expectedColumns.every((col) => fileColumns.includes(col))) {
            console.error("Invalid CSV file format. Missing expected columns.");
            return;
          }

          const formattedData = result.data.slice(1).map((row, index) => ({
            ...row,
            "S.no": index + 1,
          }));

          setCsvData(formattedData);
        },
        header: true,
      });
    }
  };

  const handleTagSelection = (rowIndex, selectedTag) => {
    const updatedSelectedTags = [
      ...selectedTags,
      { rowIndex, tag: selectedTag },
    ];
    setSelectedTags(updatedSelectedTags);

    const updatedCsvData = [...csvData];
    const selectedRowIndex = updatedSelectedTags.find(
      (tag) => tag.tag === selectedTag
    )?.rowIndex;
    if (selectedRowIndex !== undefined) {
      updatedCsvData[selectedRowIndex]["select tags"] =
        updatedCsvData[selectedRowIndex]["select tags"]
          .split(",")
          .filter((tag) => tag.trim() !== selectedTag)
          .join(",");
    }

    setCsvData(updatedCsvData);
  };

  const handleRemoveTag = (rowIndex, tagToRemove) => {
    const updatedSelectedTags = selectedTags.filter(
      (tag) => !(tag.rowIndex === rowIndex && tag.tag === tagToRemove)
    );
    setSelectedTags(updatedSelectedTags);

    const updatedCsvData = [...csvData];
    const rowTags = csvData[rowIndex]["select tags"].split(",");
    updatedCsvData[rowIndex]["select tags"] = [...rowTags, tagToRemove].join(
      ","
    );

    setCsvData(updatedCsvData);
  };

  const handleRemoveFile = () => {
    setUploadedFileName("");
    setCsvData([]);
    setSelectedTags([]);
  };

  return (
    <div className="flex flex-wrap w-full items-center gap-6 justify-center lg:gap-0 overflow-auto">
      <div className="flex flex-col text-black py-5 shadow-xl border-2 border-slate-200 w-[613px] h-[367px] mt-[133px] px-6 bg-[#FFFFFF]">
        <label
          htmlFor="fileInput"
          className="rounded flex flex-wrap w-full items-center gap-6 justify-center lg:gap-0 w-[564px] h-[258px] border border-dotted"
        >
          <input
            type="file"
            id="fileInput"
            accept=".csv"
            onChange={handleFileUpload}
            style={{ display: "none" }}
          />
          <img alt="excelicon" src={excelicon} />
          {uploadedFileName ? (
            <div>
              <p>{uploadedFileName}</p>
              <span
                onClick={handleRemoveFile}
                style={{ color: "red", cursor: "pointer", marginLeft: "40px" }}
              >
                Remove
              </span>
            </div>
          ) : (
            <div className="flex flex-wrap w-full items-center gap-3 justify-center lg:gap-1 ">
              <p>
                Drop your CSV file here or{" "}
                <span className="text-[#605BFF]">Browse</span>
              </p>
            </div>
          )}
        </label>
        <button className="bg-[#605BFF] rounded-xl w-[564px] h-[56px] mt-[17px] font-bold text-white">
          <label
            htmlFor="fileInput"
            className="flex flex-wrap w-full items-center gap-6 justify-center lg:gap-0"
          >
            <img alt="dashboard" src={icon} />
            Upload
          </label>
        </button>
      </div>

      {csvData.length > 0 && (
        <div className="flex flex-col w-[1065px] h-[497px]" style={{ paddingTop: "93px" }}>
          <div className="w-[133px] h-[32px] flex gap-[370px]">
            <p className="para font-semibold" style={{ font: "figtree", fontSize: "24px" }}>
              Uploads
            </p>
          </div>
          <div className="mt-4" style={{ maxHeight: "419px", overflowY: "auto" }}>
            <table className="rounded table-auto w-full shadow-md mt-5 border-separate border-spacing-y-3" style={{ width: '1065px', height: '419px', background: '#F5F5F5', borderRadius: '8px 0px 0px 0px' }}>
              <thead className="sticky top-0 bg-[#F5F5F5]" style={{ height: '35px', width: '957px' }}>
                <tr>
                  <th className="text-center">S.no</th>
                  <th className="text-center">Links</th>
                  <th className="text-center">Prefix</th>
                  <th className="text-center">Add Tags</th>
                  <th className="text-center">Selected Tags</th>
                </tr>
              </thead>
              <tbody className="bg-[#FFFFFF]">
                {csvData.slice(0, 39).map((row, index) => (
                  <tr className="text-center" key={index + 1} style={{ width: '1034px', height: '58px', background: '#FFFFFF', borderRadius: '8px 0px 0px 0px' }}>
                    <td>{index + 1}</td>
                    <td>
                      <a
                        href={row["links"]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        {row["links"]}
                      </a>
                    </td>
                    <td>{row["prefix"]}</td>
                    <td>
                      <select
                        className="text-center"
                        value={
                          selectedTags.find((tag) => tag.rowIndex === index)?.tag ||
                          "Select tags"
                        }
                        onChange={(e) =>
                          handleTagSelection(index, e.target.value)
                        }
                      >
                        <option disabled>Select tags</option>
                        {row["select tags"]
                          .split(",")
                          .filter(
                            (tag) =>
                              !selectedTags.some(
                                (selected) => selected.tag === tag.trim()
                              )
                          )
                          .map((tag, tagIndex) => (
                            <option key={tagIndex} value={tag.trim()}>
                              {tag.trim()}
                            </option>
                          ))}
                      </select>
                    </td>
                    <td>
                      {selectedTags
                        .filter((tag) => tag.rowIndex === index)
                        .map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-[#605BFF] rounded h-[24px] w-auto px-2 text-white justify-center inline-block mr-2"
                          >
                            {tag.tag}
                            <span
                              onClick={() =>
                                handleRemoveTag(index, tag.tag)
                              }
                              className="ml-2 cursor-pointer"
                              style={{ color: "white", marginLeft: "8px" }}
                            >
                              &times;
                            </span>
                          </span>
                        ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
