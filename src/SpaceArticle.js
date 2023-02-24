import thumbnail from "./thumbnail.png";

export default function SpaceArticle() {
    return (
        <article className="flex flex-col article-thumbnail max-w-[350px]">
            <img src={thumbnail} alt="" />
            <div className="items-start flex flex-col">
                <h3 className="mt-[25px] text-[24px]">Lorem ipsum dolor, dolor sit amet, consectetur</h3>
                <p className="my-[25px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <a href="#" className="text-[#EDB72D] font-['Open Sans'] text-[18px] font-[600]">Read Article in 3 minutes</a>
            </div>
        </article>
    );
}