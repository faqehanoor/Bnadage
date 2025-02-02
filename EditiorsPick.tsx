import React from "react"; 
import Image from "next/image"; 
import card1 from "@/app/card-item.png"; 
import card2 from "@/app/card-item (1).png"; 
import card3 from "@/app/col-md-3.png"; 
import card4 from "@/app/col-md-6.png"; 

export default function EditiorsPick() {
    return (
        <div className="bg">
            <h1 className="text-center uppercase text-3xl text-blue-950 font-bold px-10 py-10">
                Editors Pick
            </h1>
            <p className="text-center text-gray">Problems trying to resolve the conflicts</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6">
                {/* Men */}
                <div className="relative group">
                    <Image 
                        src={card4} 
                        alt="Men" 
                        width={0} 
                        height={0} 
                        className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-80 animate-fadeIn"
                    />
                </div>

                {/* Women */}
                <div className="relative group px-20">
                    <Image 
                        src={card3} 
                        alt="Women" 
                        width={0} 
                        height={0} 
                        className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-80 animate-fadeIn"
                    />
                </div>

                {/* Accessories and Kids */}
                <div className="grid grid-cols-1 gap-2">
                    {/* Accessories */}
                    <div className="relative group">
                        <Image 
                            src={card1} 
                            alt="Accessories" 
                            width={0} 
                            height={0} 
                            className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-80 animate-fadeIn"
                        />
                    </div>
                    {/* Kids */}
                    <div className="relative group">
                        <Image 
                            src={card2} 
                            alt="Kids" 
                            width={0} 
                            height={0} 
                            className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-80 animate-fadeIn"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
