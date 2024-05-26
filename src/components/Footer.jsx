import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center w-full fixed bottom-0 py-0">
      <div className="logo font-bold text-2xl">
        <span className="text-green-700"> &lt;</span>
        <span>Pass</span>
        <span className="text-green-700">OP/&gt;</span>
      </div>
      <div className="flex justify-center items-center">
        Created by @SunilJain
      </div>
    </div>
  );
}

export default Footer;
