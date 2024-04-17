import { useState } from "react";
import { darkColors, lightColors } from "../data/sidebarTheme";

const SideBar = ({ lightMode }) => {
    const colors = lightMode ? lightColors : darkColors;

    return (
        <div className={`fixed top-[56px] left-0 lg:relative flex flex-col lg:w-1/5 h-[calc(100vh-56px)] lg:mt-[-56px] lg:h-screen overflow-y-auto ${colors.background} ${colors.text} text-white shadow-2xl`}>

            <div className="flex flex-row justify-center items-center gap-2 mt-4" >
                <input type="text" name="search" id="" placeholder="Search..." className="p-2 text-black rounded m-1 w-2/3" />
                <button className={`${colors.btnbg} p-2 rounded text-base`}>Search</button>
            </div>

            <ul className="">
           
                <h4 className="text-2xl font-bold text-center mt-4 mb-2 ">All Dishes</h4>
                <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700 cursor-pointer`}>Chicken biryani</li>
                <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700 cursor-pointer`}>Chicken curry</li>
                <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700 cursor-pointer`}>Chicken 65</li>
                <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700 cursor-pointer`}>Chicken fry</li>
                <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700 cursor-pointer`}>Chicken lollipop</li>
                <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700 cursor-pointer`}>Chicken soup</li>
                <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700 cursor-pointer`}>Chicken curry</li>
                <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700 cursor-pointer`}>Chicken 65</li>
                <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700 cursor-pointer`}>Chicken fry</li>
                <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700 cursor-pointer`}>Chicken kebab</li>
                <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700 cursor-pointer`}>Chicken soup</li>
                <li className="text-center mt-4">End Of List</li>
            </ul>

            <footer className="mt-2 px-4 py-2 text-sm text-center text-gray-500">
                All rights reserved &copy; {new Date().getFullYear()}
            </footer>
        </div>
    );
}

export default SideBar;
