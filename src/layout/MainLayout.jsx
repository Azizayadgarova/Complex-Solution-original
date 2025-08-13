import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from '../ScrollToTop';
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen mt-[10px]  ">
            <Navbar />
            <main className="grow">
                <ScrollToTop />
                <div className="animate-fadeIn">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}