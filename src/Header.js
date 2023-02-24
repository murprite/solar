import logo from "./logo.svg";

export default function Header() {

    return (
        <header className="container mx-auto py-[25px] grid grid-cols-3 flex-none">
            <div className="flex items-center">
                <img src={logo} alt="Solar" />
                <h1 className="font-['Open_Sans_Condensed'] ml-[15px] font-[700] tracking-[.15em] uppercase text-white text-[32px]">Solar</h1>
            </div>
            <nav className="justify-self-center flex items-center">
                <ul className="font-['Open Sans'] font-[500] flex space-x-4 text-white">
                    <li><a href="./">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#articles">Articles</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}