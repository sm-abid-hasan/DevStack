import BannerLogo from "../assets//banner-stack.png";


const Banner = () => {
    return (
        <div className="flex justify-between container items-center mx-auto py-4">
            <div>
                <h2 className="font-bold text-6xl ">Buid Your Ideal <br/><span className="bg-linear-to-r from-[#FC522A] to-[#8038E7] bg-clip-text text-transparent ">Development Stack</span></h2>
                <p className="my-6">Explore frontend, backend, database, and tooling options,<br/>
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <div className=" flex gap-4">
                    <button className="bg-linear-to-r from-[#F9721A] to-[#ED4A93] text-white py-2 px-4 rounded-md">Explore Technologies</button>
                    <button className="border border-shadow-400 rounded-md py-2 px-4">Learn More</button>
                </div>
            </div>
            <img src={BannerLogo} alt="Baneer Image" />
        </div>
    )
}
export default Banner;