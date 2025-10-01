import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Sidebar({ selected, setSelected }) {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = ["Personal", "Projects", "About", "Contact"];

    return (
        <>
            <div className="bg-blue-950 text-white flex justify-between items-center p-4 lg:hidden">
                <h1 className="text-xl font-bold">Admin Panel</h1>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </button>
            </div>

            <div
                className={`
          bg-blue-950 text-white p-4
          lg:block fixed lg:relative top-0 left-0 h-full w-64
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
            >
                <h1 className="text-2xl font-bold mb-6 hidden lg:block">Admin Panel</h1>
                <nav className="flex flex-col gap-2">
                    {menuItems.map((item) => (
                        <button
                            key={item}
                            className={`p-2 rounded w-full text-left hover:bg-gray-700 ${
                                selected === item ? "bg-gray-700" : ""
                            }`}
                            onClick={() => {
                                setSelected(item);
                                setIsOpen(false);
                            }}
                        >
                            {item}
                        </button>
                    ))}
                </nav>
            </div>
        </>
    );
}
