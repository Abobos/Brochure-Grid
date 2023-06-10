import { useRouter } from "next/router";

export default function City({ data }: { data: any }) {
  return (
    <div>
      <h1>Brochure Promotion For Cities dd Product</h1>
    </div>
  );
}

export async function getServerSideProps(props: any) {
  const res = await fetch(
    `http://127.0.0.1:4000/city-product-grid?city=${props.query.city}&product=${props.query.product}`
  );
  const data = await res.json();

  return { props: { data } };
}
