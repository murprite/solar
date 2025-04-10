import main from "./main.png";
import ArticleComponent from "./ArticleComponent";
import SpaceArticle from "./SpaceArticle";
import SideArticles from "./SideArticles";
import { Parallax } from 'react-parallax';
import thumbnailB from "./thumbnail-big.png";
import Footer from "./Footer";


export default function Body() {
    return (
        <main className="px-[50px]"> 
            <Parallax strength={200} bgImage={main}>
                <div className="flex flex-col h-[95vh] pb-[105px]">
                    <h2 className="text-[64px] font-[700] font-['Open_Sans_Condensed'] text-white text-center mt-auto shadow-md">SUPERNOVA REMNANTS</h2>
                    <button className="mx-auto mt-[32px] text-[#EDB72D] border-2 border-[#EDB72D] font-['Open Sans'] text-[24px] font-[600] px-[35px] py-[15px]">View more</button>
                </div>
            </Parallax>
            <div className="grid grid-cols-3 gap-[100px] container mx-auto py-[70px]">
                <ArticleComponent />
                <ArticleComponent />
                <SideArticles />
            </div>
            <div className="container mx-auto mb-[130px]">
                <div className="flex justify-between">
                    <h2>The Space Articles</h2>
                    <a href="#" className="text-[#EDB72D] border-2 border-[#EDB72D] font-['Open Sans'] text-[24px] font-[600] px-[25px] py-[10px]">View more</a>
                </div>
                <div className="flex mt-[50px] justify-between">
                    <SpaceArticle />
                    <SpaceArticle />
                    <SpaceArticle />
                    <SpaceArticle />
                </div>
            </div>
            <div className="container mx-auto pb-[170px]">
                <h2>Most read articles today</h2>
                <div className="flex justify-between mt-[40px]">
                    <div className="grid grid-rows-2">
                        <div className="side-article max-w-[640px]">
                            <h4 className="text-[28px]">Lorem ipsum dolor, dolor sit amet, consectetur</h4>
                            <p className="my-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <a href="#" className="underline text-[#EDB72D] underline-offset-8 font-[600]">Read Article in 3 minutes</a>
                        </div>
                        <div className="side-article max-w-[640px]">
                            <h4 className="text-[28px]">Lorem ipsum dolor, dolor sit amet, consectetur</h4>
                            <p className="my-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <a href="#" className="underline text-[#EDB72D] underline-offset-8 font-[600]">Read Article in 3 minutes</a>
                        </div>
                    </div>
                    <img src={thumbnailB} alt="" />
                </div>
            </div>
        </main>
    );
}