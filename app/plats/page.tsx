import Plat from "./plat/plat"

export default function Plats() {
    return(
        <div className="px-[10vw] py-10">
            <h1 className="text-center text-4xl font-bold">Les plats préparés pour vous !</h1>
            <div className="flex flex-wrap my-10 gap-2">
                <Plat/>
                <Plat/>
                <Plat/>
                <Plat/>
                <Plat/>
                <Plat/>
                <Plat/>
                <Plat/>
                <Plat/>
            </div>
        </div>
    )
}