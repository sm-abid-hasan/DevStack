import { use, useState } from "react";
import type { IExploreTheTechnologies } from "../types";
import { FaStar } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Bounce, toast } from "react-toastify";

interface IExploreTheTechnologiesProps {
    usersPromise: Promise<IExploreTheTechnologies[]>;

}

const ExploreTheTechnologies = ({ usersPromise }: IExploreTheTechnologiesProps) => {
    console.log(usersPromise, "usersPromise");
    const [stack, setStack] = useState<IExploreTheTechnologies[]>([]);
    const data = use(usersPromise);
    console.log(data, "data");

    // Add technology to stack
    const handleAddToStack = (technology: IExploreTheTechnologies) => {
        setStack([...stack, technology]);
        toast.success(`${technology.name} added to your stack!`,{
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };
    // Remove one technology
    const handleRemoveFromStack = (id: string) => {
        const technology = stack.find(
            (technology) => technology.id === id
        );

        const remainingTechnologies = stack.filter(
            (technology) => technology.id !== id
        );

        setStack(remainingTechnologies);
        if (technology) {
         
        toast.success(`${technology.name} removed from cart!`,{
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };
    };

    // Remove all technologies
    const handleRemoveAll = () => {
        setStack([]);
          toast.success("All technologies removed from your stack!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
    };




    return (
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-2">Explore the <span className="bg-linear-to-r from-[#DC4BA8] to-[#CA4FB9] bg-clip-text text-transparent">Technologies</span></h2>
            <p className="text-[#64748B] pb-8">Pick one technology per category to build your ideal stack.</p>
            <div className="grid grid-cols-12 gap-4">
                {/* 90% */}
                <div className="col-span-9  ">
                    <div className="grid grid-cols-3 gap-4 ">
                        {
                            data.map((technology) => {

                                const isAdded = stack.some(
                                    (item) => item.id === technology.id
                                );

                                return (
                                    <div key={technology.id}
                                        className="rounded-md border border-[#E2E8F0] px-4 hover:-translate-y-2 transition-transform duration-200">
                                        <div className="flex items-center justify-between py-4">
                                            <img src={technology.icon} alt="Technology Icon" className="w-12 h-12" />
                                            <span className={`px-3 py-1 rounded-full border  ${technology.badgeColor}`}>
                                                {technology.badge}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[20px]">{technology.name}</h3>
                                            <p className="py-2 text-[#64748B]">{technology.description}</p>
                                        </div>
                                        <ul className="flex justify-between items-center">
                                            <li className="bg-[#F4F7FA] py-1 px-2 rounded-md text-[#30353b]">{technology.category}</li>
                                            <li className="text-[#30353b]">{technology.difficulty}</li>
                                            <li className="flex items-center gap-1 text-yellow-500"><FaStar /><span className="text-[#334155] font-semibold">{technology.rating}</span></li>
                                        </ul>
                                        {/* Add To Stack Button */}
                                        <button
                                            onClick={() => handleAddToStack(technology)}
                                            disabled={isAdded}
                                            className="bg-[#0A0F1D] text-white block mx-auto px-6 py-2 rounded-md my-6 hover:cursor-pointer hover:bg-[#192030] disabled:bg-green-700 disabled:cursor-default"
                                        >
                                            {isAdded
                                                ? "Added to Stack"
                                                : "Add to Stack"}
                                        </button>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

               