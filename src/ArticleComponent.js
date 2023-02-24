import thumbnail from "./thumbnail.png";

export default function ArticleComponent() {
    return (
        <article className="flex flex-col article-thumbnail max-w-[500px]">
            <img src={thumbnail} alt="" />
            <div className="items-start flex flex-col">
                <h3 className="mt-[25px]">Lorem ipsum dolor</h3>
                <p className="my-[25px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <a href="#" className="text-[#EDB72D] border-2 border-[#EDB72D] font-['Open Sans'] text-[24px] font-[600] px-[25px] py-[10px]">Read article</a>
            </div>
        </article>
    );
}