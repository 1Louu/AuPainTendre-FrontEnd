"use client";

import { useState } from "react";
import Plat from "./plat/plat";
import SelectedPlat from "./plat/selectedplat";
import { PlatType } from "@/types/plat";

type Props = {
  posts: PlatType[];
};

export default function PlatsClient({ posts }: Props) {
  const [selectedPlat, setSelectedPlat] =
    useState<PlatType | null>(null);

  return (
    <div className="px-[10vw] py-10">
      <h1 className="text-center text-4xl font-bold">
        Les plats préparés pour vous !
      </h1>

      <div className="flex flex-wrap my-10 gap-2">
        {posts.map((plat) => (
          <Plat
            key={plat._id}
            plat={plat}
            onClick={() => setSelectedPlat(plat)}
          />
        ))}
      </div>

        
      {selectedPlat && ( /* equivalent de si selectedPlat alors composant SelectedPlat == vrai*/
        <SelectedPlat plat={selectedPlat} onClose={() => setSelectedPlat(null)} />
      )}
    </div>
  );
}