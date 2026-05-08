import { PlatType } from "@/types/plat";

type PlatProps = {
  plat: PlatType;
  onClick: () => void;
};

export default function Plat({ plat, onClick }: PlatProps) {
    return(
        <div onClick={onClick} className="bg-white p-8 text-center shadow-md/20 rounded-4xl ">
            <img className="rounded-2xl shadow-md/20"src="/plat.png" width="200" height="200"/>
            <h2>{plat.name}</h2>
            <p>{plat.description}</p>
            <p>{plat.price} €</p>
        </div>
    )
}