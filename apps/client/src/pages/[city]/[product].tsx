import BrochureCard from "@/components/Brochure";
import Descriptor from "@/components/Descriptor";
import { BrochureData } from "@/types";
import { GetServerSidePropsContext } from "next";

export default function Brochure({ data }: { data: BrochureData }) {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col">
        <header className=" flex text-2xl md:text-5xl self-center tracking-wider text-center bg-white p-5">
          Br<span className="text-[#e83840] font-bold">o</span>chures For{" "}
          {data.product.attributes.name} Products in {data.city.attributes.name}
        </header>
      </div>

      <Descriptor
        name={data.city.attributes.name}
        description={data.city.attributes.description}
      />
      <Descriptor
        name={data.product.attributes.name}
        description={data.product.attributes.description}
      />

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
        {data.brochures.map((brochure) => (
          <BrochureCard brochure={brochure} key={brochure.id} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const url = process.env.API_URL;

  const res = await fetch(
    `${url}/city-product-grid?city=${context.query.city}&product=${context.query.product}`
  );
  const responseCode = res.status;
  const { data } = await res.json();

  if (responseCode === 404) {
    return {
      notFound: true,
    };
  }
  return { props: { data } };
}
