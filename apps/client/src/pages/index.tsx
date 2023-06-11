import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Brochure Promotions</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="A digital promotional document that provides information about a product"
        />
        <meta
          name="keywords"
          content="Brochures, Marketing, Business Promotions"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta
          name="viewport"
          content="height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>

      <section className="h-screen flex flex-col justify-center items-center space-y-4">
        <h1 className="tracking-wider md:text-4xl">
          Brochure Promotion For Cities and Product
        </h1>
        <Link
          className="bg-[#009347] rounded-full p-3 md:p-5 text-white md:text-2xl"
          href="/berlin/bier"
        >
          View Brochures
        </Link>
      </section>
    </>
  );
}
