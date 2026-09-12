import FooterLogo from "../assets/logo-text.png"

const Footer = () => {
    return (
        <div className="border-t border-gray-300 mt-22">
            <div className="flex container mx-auto justify-between border-b border-gray-300 py-15 ">
                <div>
                    <img src={FooterLogo} alt="" />
                    <p className="text-[#64748B] pt-2">Curated tools, technologies, and resources for developers building<br />
                        modern software.</p>
                    <ul className="flex gap-4 pt-5 text-[#475569] font-semibold">
                        <li><a href="/">GitHub</a></li>
                        <li><a href="/">Twitter</a></li>
                        <li><a href="/">Linkdin</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold pb-3">PRODUCT</h3>
                    <ul className="text-[#64748B]">
                        <li className="pb-1"><a href="/">Home</a></li>
                        <li className="pb-1"><a href="/">Technologies</a></li>
                        <li ><a href="/">Projects</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold pb-3">COMPANY</h3>
                    <ul className="text-[#64748B]">
                        <li className="pb-1"><a href="/">About</a></li>
                        <li className="pb-1"><a href="/">Contact</a></li>
                        <li className="pb-1"><a href="/">Careers</a></li>
                    </ul>
                </div>

                <div >
                    <h3 className="font-semibold pb-3">LEGAL</h3>
                    <ul className="text-[#64748B]">
                        <li className="pb-1"><a href="/">Privacy Policy</a></li>
                        <li className="pb-1"><a href="/">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer bottom section */}
            <div className="container mx-auto flex justify-between pt-7 mb-20">
                <p className="text-[#64748B]">© 2026 Dev Stack. All rights reserved.</p>
                <ul className="text-[#64748B] flex justify-between gap-4">
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>

            </div>
        </div>


        

    )
}


export default Footer;