import Logo from "../assets/logo-text.png"


const Navbar = () => {

    return (
        <div className="border-b border-gray-300 sticky top-0 z-50 bg-white">
            <nav className="flex justify-between gap-4 container mx-auto py-4 ">
                <img src={Logo} alt="Logo" className="w-35 h-auto" />
                <ul className="flex items-center gap-4 ">
                    <li className="text-[#DB2777] font-semibold"><a href="/">Home</a></li>
                    <li className="hover:text-[#DB2777] font-semibold"><a href="/">Technologies</a></li>
                    <li className="hover:text-[#DB2777] font-semibold"><a href="/">Projects</a></li>
                    <li className="hover:text-[#DB2777] font-semibold"><a href="/">About</a></li>
                    <li className="hover:text-[#DB2777] font-semibold"><a href="/">Contact</a></li>
                </ul>
                <div className="flex items-center gap-4 ">

                    <button>Sign In</button>
                    <button className="bg-[#D91B7E] text-white rounded-full py-1 px-3 hover:cursor-pointer hover:bg-[#a33570]">Sign Up</button>
                </div>

            </nav>
        </div>
    )
}
export default Navbar;