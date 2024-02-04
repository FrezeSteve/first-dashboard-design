import { useRef, useState } from "react";
import IndexContextFunc from "../context";

export default function Header() {
    const [dropDown, setDropDown] = useState(false);
    const dropDownTarget = useRef(null);
    const { setIsSeen } = IndexContextFunc();

    return (
        <div className="flex justify-between items-center p-4 shadow border-b-[0.5px] border-b-gray-100">
            <div onClick={() => setIsSeen((prev) => !prev)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </div>
            <div className="flex gap-6 md:gap-10 items-center">
                <div className="tracking-widest relative hover:text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                    <span className="absolute -top-0.5 -right-1 z-1 h-2 w-2 rounded-full bg-red-500 inline">
                        <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                    </span>
                </div>
                <button
                    className="relative"
                    onClick={function (event) {
                        event.preventDefault();
                        if (Array.from(dropDownTarget.current.children).includes(event.target)) setDropDown(true);
                        else setDropDown(false);
                    }}
                    onBlur={() => setDropDown(false)}
                    onFocus={() => setDropDown(true)}
                >
                    <div ref={dropDownTarget} className="flex gap-1 items-center cursor-pointer">
                        <span className="text-xl md:text-2xl">admin</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[22px] h-[22px] md:w-[26px] md:h-[26px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <ul className={`absolute text-nowrap w-fit min-w-[10rem] max-w-[22rem] top-10 -right-2 bg-black text-white md:bg-white md:text-black md:shadow border-[0.5px] border-gray-100 shadow rounded-lg py-3 ${dropDown ? "flex" : "hidden"} flex-col`}>
                        <li className="md:hover:bg-gray-50 hover:bg-gray-800 p-2">Logout</li>
                    </ul>
                </button>
            </div>
        </div>
    );
}
