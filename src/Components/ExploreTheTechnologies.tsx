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

                {/* 10% */}
                {/* Your Stack */}
                <div className="col-span-3 rounded-xl border border-[#E2E8F0] p-5 h-fit">

                    <h2 className="font-bold text-[18px]">Your Stack</h2>

                    <p className="text-sm text-[#94A3B8] mt-2">
                        {stack.length} Technology Selected
                    </p>

                    {stack.length === 0 ? (
                        <div className="flex items-center justify-center h-37.5">
                            <p className="text-[#94A3B8] border border-[#E2E8F0] w-full text-center py-4 rounded-md ">
                                Your stack is empty.
                            </p>
                        </div>
                    ) : (
                        <div className="mt-5 space-y-2">

                            {stack.map((technology) => (
                                <div key={technology.id} className="flex items-center justify-between border border-[#E2E8F0] rounded-md p-3" >

                                    <div className="flex items-center gap-3">

                                        <img
                                            src={technology.icon}
                                            alt={technology.name}
                                            className="w-8 h-8 object-contain"
                                        />

                                        <div>
                                            <h3 className="font-semibold ">
                                                {technology.name}
                                            </h3>

                                            <p className="text-[12px] text-[#94A3B8]">
                                                {technology.category}
                                            </p>
                                        </div>

                                    </div>

                                    <button
                                        onClick={() => handleRemoveFromStack(technology.id)}
                                        className="text-[#94A3B8] hover:text-red-500 cursor-pointer"
                                    >
                                        <FaXmark />
                                    </button>

                                </div>
                            ))}

                            <button
                                onClick={handleRemoveAll}
                                className="w-full border border-red-300 text-red-500 rounded-md py-2 mt-8 hover:bg-red-50 cursor-pointer"
                            >
                                Remove All
                            </button>


                        </div>
                    )}

                </div>
            </div>
        </div>
    )

}

export default ExploreTheTechnologies;