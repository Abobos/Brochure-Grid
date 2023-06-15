import { Brochure } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function BrochureCard({ brochure }: { brochure: Brochure }) {
  return (
    <div className="w-80 h-auto border-2 p-3 rounded-lg bg-white">
      <div>
        <Image
          src={brochure.brochureImages.normal}
          alt="Brochure-Image"
          width="100"
          height="100"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div className="flex mt-3">
        <Image
          className="h-20 w-20 rounded-full"
          src={brochure.brochureImages.thumbnails}
          alt="Brochure-Thumbnail"
          width="100"
          height="100"
        />

        <div className="ml-5">
          <p className="text-lg text-black font-semibold">{brochure.title}</p>
          <p className="text-slate-500 font-medium">
            Published by {brochure.publisher.name}
          </p>
        </div>
      </div>

      <Link
        href={brochure._links.self.href}
        target="_blank"
        className="bg-sky-500 hover:bg-sky-700 px-4 py-1 text-sm font-semibold rounded-full text-white block mx-auto w-32 text-center"
      >
        Show
      </Link>
    </div>
  );
}
