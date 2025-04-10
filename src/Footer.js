import logo from "./logo.svg";

export default function Footer() {
    return (
        <footer className="bg-[#111111] flex flex-col items-center px-[50px]">
            <div className="container mx-auto pt-[110px] pb-[140px] border-b-2 border-b-[#989898] flex justify-between items-center">
                <div className="flex">
                    <img src={logo} alt="Solar" />
                    <h1 className="font-['Open_Sans_Condensed'] ml-[15px] font-[700] tracking-[.15em] uppercase text-white text-[32px]">Solar</h1>
                </div>
                <a href="./" className="font-['Raleway'] text-white uppercase font-[600] tracking-[.1em] text-[24px]">Home</a>
                <a href="#about" className="font-['Raleway'] text-white uppercase font-[600] tracking-[.1em] text-[24px]">About</a>
                <a href="#articles" className="font-['Raleway'] text-white uppercase font-[600] tracking-[.1em] text-[24px]">Articles</a>
                <a href="/contact" className="font-['Raleway'] text-white uppercase font-[600] tracking-[.1em] text-[24px]">Contact</a>
            </div>
            <div className="flex justify-between font-['Open_Sans'] text-[#A6A6A6] font-[600] text-[16px] my-[70px]">
                Copyright 2023. All rights reserved.
            </div>
        </footer>
    );
}