// import React, { useState } from "react";
// import logo from "../assets/Logo and company.png";
// import { HiMenuAlt3 } from "react-icons/hi";
// import Items from "./Items";

// const SideBar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div
//       className={`bg-[#ffffff] md:h-[150vh] relative flex flex-col justify-between py-4 md:py-0 text-gray-100 px-6 `}
//     >
//       <div className="flex flex-col gap-4">
//         <div className="flex flex-row">
//         <img alt="dashboard" src={logo} className="w-[111px] h-[42px] mt-[49px] ml-[20px]"  />
         
//           <HiMenuAlt3
//             size={30}
//             className="md:hidden cursor-pointer absolute right-0 my-auto mr-5 mt-1"
//             onClick={() => setOpen(!open)}
//           />
//           {open && (
//             <div className="mt-12 mx-auto right-0 absolute bg-[#4285F4] p-4 rounded-lg mr-1">
//               <Items />
//             </div>
//           )}
//         </div>
//         <div className="hidden md:flex">
//           <Items />
//         </div>
//       </div>

//       <div className="md:flex hidden flex-col justify-between mt-10 mb-12">
//         <div className="flex flex-col cursor-pointer justify-between mt-20 text-md ml-2 text-white gap-2">
//           <p>Help</p>
//           <p>Contact Us</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideBar;


import React, { useState } from "react";
import logo from "../assets/Logo and company.png";
import { HiMenuAlt3 } from "react-icons/hi";
import Items from "./Items";
import { useTheme } from "./ThemeContext";// Import useTheme

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const { toggleTheme } = useTheme(); // Use the toggleTheme function

  console.log("Theme",toggleTheme)
  return (
    <div
      className={`bg-[#ffffff] md:h-[150vh] relative flex flex-col justify-between py-4 md:py-0 text-gray-100 px-6`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-row">
          <img
            alt="dashboard"
            src={logo}
            className="w-[111px] h-[42px] mt-[49px] ml-[20px]"
          />
          <HiMenuAlt3
            size={30}
            className="md:hidden cursor-pointer absolute right-0 my-auto mr-5 mt-1"
            onClick={() => setOpen(!open)}
          />
          {open && (
            <div className="mt-12 mx-auto right-0 absolute bg-[#4285F4] p-4 rounded-lg mr-1">
              <Items />
            </div>
          )}
        </div>
        <div className="hidden md:flex">
          <Items />
        </div>
      </div>

      <div className="md:flex hidden flex-col justify-between mt-10 mb-12">
        <div className="flex flex-col cursor-pointer justify-between mt-20 text-md ml-2 text-white gap-2">
          <p>Help</p>
          <p>Contact Us</p>
        </div>
        <button
          onClick={toggleTheme}
          className="fixed bottom-4 left-4 p-2 rounded-full bg-gray-800 text-white"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default SideBar;
