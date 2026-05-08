import Plat from "./plats/plat/plat";
import { PlatType } from "@/types/plat";

async function getStaticProps() {
  const res = await fetch('http://localhost:8080/api/plats')
  next: { revalidate: 60 }
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}

async function getPlats() {
  const res = await fetch("http://localhost:8080/api/plats", {
    cache: "no-store",
  });
  next: { revalidate: 5 }

  return res.json();
}

export default async function Home() {
  const posts: PlatType[] = await getPlats();

  return (
    <div className="items-center justify-center font-sans dark:bg-black">
        <h1 className="m-auto my-[10vh] text-center text-4xl ">Votre restaurant locale en ligne !<br/>
        Choisissez, Commandez et récupérez vos plats préparé !
        </h1>
        <div className="bg-[#D9D9D9] flex px-[20vw] py-10 flex place-content-between">
          <div className="flex flex-wrap my-10 gap-2">
            {posts.map((plat) => (
              <Plat key={plat._id} plat={plat} />
            ))}
          </div>
        </div>
    </div>
  );
}