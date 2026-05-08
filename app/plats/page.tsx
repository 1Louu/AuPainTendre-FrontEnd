import PlatsClient from "./platsClient";
import { PlatType } from "@/types/plat";

async function getPlats(): Promise<PlatType[]> {
  const res = await fetch("http://localhost:8080/api/plats", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Page() {
  const posts = await getPlats();

  return <PlatsClient posts={posts} />;
}