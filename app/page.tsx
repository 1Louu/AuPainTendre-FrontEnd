import Plat from "./plats/plat/plat";

export default function Home() {
  return (
    <div className="items-center justify-center font-sans dark:bg-black">
        <h1 className="m-auto my-[10vh] text-center text-4xl ">Votre restaurant locale en ligne !<br/>
        Choisissez, Commandez et récupérez vos plats préparé !
        </h1>
        <div className="bg-[#D9D9D9] flex px-[20vw] py-10 flex place-content-between">
          <Plat/><Plat/><Plat/>
        </div>
    </div>
  );
}