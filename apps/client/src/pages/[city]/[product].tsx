import BrochureCard from "@/components/Brochure";
import { BrochureData } from "@/types";

export default function Brochure({ data }: { data: BrochureData }) {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-5xl self-center tracking-wider text-center">
          Br<span className="text-[#e83840] font-bold">o</span>chures For{" "}
          {data.product.attributes.name.toUpperCase()} Products in{" "}
          {data.city.attributes.name.toUpperCase()}
        </h1>

        <div className="mt-4">
          <h2 className="md:text-2xl tracking-wide">
            {data.city.attributes.name.toUpperCase()}
          </h2>
          <p>{data.city.attributes.description}</p>
        </div>

        <div className="mt-4">
          <h2 className="md:text-2xl tracking-wide">
            {data.product.attributes.name.toUpperCase()}
          </h2>
          <p>{data.product.attributes.description}</p>
        </div>
      </div>

      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-content-center">
        {data.brochures.map((brochure) => (
          <BrochureCard brochure={brochure} key={brochure.id} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(props: any) {
  const res = await fetch(
    `http://127.0.0.1:4000/city-product-grid?city=${props.query.city}&product=${props.query.product}`
  );
  const errorCode = res.ok ? false : res.status;
  const { data } = await res.json();

  if (errorCode === 404) {
    return {
      notFound: true,
    };
  }
  return { props: { errorCode, data } };
}
