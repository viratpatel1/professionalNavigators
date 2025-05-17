"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import LoginPage from "../auth/page";
// import { useState } from "react";


export default function Header() {
    const router = useRouter();

    // const handleLoginClick = () => {
    //     router.push("/auth");
    // };
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-6 lg:py-6 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center">
                    {/* <img src="/logo.png" alt="SPC Logo" className="h-10 w-auto" /> */}
                    {/* <a href="#" className="text-black hover:text-red-600">Professional Navigator</a> */}
                    <Image
                        src="/images/Professional.jpg"
                        alt="Student profile picture"
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-6 text-black font-medium">
                    {/* <a href="#" className="hover:text-red-600">Gurukul</a> */}

                    <div className="relative group">
                        <a href="#" className="flex items-center hover:text-red-600">
                            Home
                            {/* <span className="ml-1 text-red-500">▼</span> */}
                        </a>
                        {/* Dropdown */}
                        {/* <div className="absolute hidden group-hover:block bg-white shadow-md py-2 mt-1">
                            <a href="#" className="block px-4 py-1 hover:bg-gray-100">CA Foundation</a>
                            <a href="#" className="block px-4 py-1 hover:bg-gray-100">CA Intermediate</a>
                        </div> */}
                    </div>

                    <div className="relative group">
                        <a href="#services" className="flex items-center hover:text-red-600">
                            Services
                            {/* <span className="ml-1 text-red-500">▼</span> */}
                        </a>
                        {/* <div className="absolute hidden group-hover:block bg-white shadow-md py-2 mt-1">
                            <a href="#" className="block px-4 py-1 hover:bg-gray-100">Mock Tests</a>
                            <a href="#" className="block px-4 py-1 hover:bg-gray-100">Past Papers</a>
                        </div> */}
                    </div>

                    <div className="relative group">
                        <a href="#team" className="flex items-center hover:text-red-600">
                            Team
                            {/* <span className="ml-1 text-red-500">▼</span> */}
                        </a>
                        {/* <div className="absolute hidden group-hover:block bg-white shadow-md py-2 mt-1">
                            <a href="#" className="block px-4 py-1 hover:bg-gray-100">Hardcopy</a>
                            <a href="#" className="block px-4 py-1 hover:bg-gray-100">E-books</a>
                        </div> */}
                    </div>

                    <div className="relative group">
                        <a href="#success" className="flex items-center hover:text-red-600">
                            Success Stories
                            {/* <span className="ml-1 text-red-500">▼</span> */}
                        </a>
                        {/* <div className="absolute hidden group-hover:block bg-white shadow-md py-2 mt-1">
                            <a href="#" className="block px-4 py-1 hover:bg-gray-100">Hardcopy</a>
                            <a href="#" className="block px-4 py-1 hover:bg-gray-100">E-books</a>
                        </div> */}
                    </div>
                </nav>

                {/* Right Section */}
                <div className="flex items-center space-x-6">
                    {/* <div className="flex items-center text-teal-600 font-semibold">
                        <FaShoppingCart className="text-xl mr-1" />
                        <span>0</span>
                    </div> */}

                    {/* <button
                        onClick={handleLoginClick}
                        className="bg-red-600 text-white px-4 py-1 rounded-md font-semibold hover:bg-red-700">
                        Login
                    </button>

                    <div className="text-black font-bold text-sm">
                        <span className="block"><CgProfile className="text-xl mr-1" /></span>
                    </div> */}
                </div>
            </div>
        </header>
    );
}
