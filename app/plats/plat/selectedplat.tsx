"use client";

import { useState } from "react";
import { PlatType } from "@/types/plat";

type PlatProps = {
  plat: PlatType;
  onClose: () => void;
};



export default function SelectedPlat({ plat, onClose, }: PlatProps) {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
    if (quantity > 1) {
        setQuantity(quantity - 1);
    }
  };
    return(
        <div onClick={onClose} className=" fixed bg-gray-500/20 w-screen h-screen top-0 left-0 cursor-pointer"> 
            <div onClick={(e) => e.stopPropagation()} className="bg-white p-8 text-center shadow-md/20 rounded-4xl w-[50vw] m-auto mt-40 flex cursor-default">
                <div className="flex flex-col gap-5">
                    <img className="rounded-2xl shadow-md/20"src="/plat.png" width="200" height="200"/>
                    <h2 className="text-2xl font-bold">{plat.name}</h2>
                    <p  className="text-xl font-bold">{plat.price} €</p>
                    <div className="flex gap-2">
                        <button className="rounded-xl bg-[#B9FFAA] shadow-md/20 px-5 py-4 my-auto cursor-pointer">Ajouter au panier : {quantity}</button>
                        <div className="flex flex-col gap-1 text-xl">
                            <button onClick={increment} className="rounded-md bg-gray-300 shadow-md/10 p-2 py-1 my-auto cursor-pointer">+</button>
                            <button onClick={decrement} className="rounded-md bg-gray-300  shadow-md/10 p-2 py-1 my-auto cursor-pointer">-</button>
                        </div>
                    </div>
                </div>
                <div className="p-4 text-center w-full">
                    <p>{plat.description}</p>
                </div>
            </div>
        </div>
    )
}