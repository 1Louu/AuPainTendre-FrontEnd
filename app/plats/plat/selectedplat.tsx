import { PlatType } from "@/types/plat";

type PlatProps = {
  plat: PlatType;
};

export default function SelectedPlat({ plat }: PlatProps) {
    return(
        <div className=" fixed bg-gray-500/20 w-screen h-screen top-0 left-0 cursor-pointer"> 
            <div className="bg-white p-8 text-center shadow-md/20 rounded-4xl w-[50vw] m-auto mt-40 flex cursor-default">
                <div className="flex flex-col gap-5">
                    <img className="rounded-2xl shadow-md/20"src="/plat.png" width="200" height="200"/>
                    <h2 className="text-2xl font-bold">{plat.name}</h2>
                    <p  className="text-xl font-bold">{plat.price} €</p>
                    <button className="rounded-xl bg-[#B9FFAA] shadow-md/20 px-5 py-4 my-auto cursor-pointer">Ajouter au panier</button>
                </div>
                <div className="p-4 text-center w-full">
                    <p>{plat.description}</p>
                </div>
            </div>
        </div>
    )
}