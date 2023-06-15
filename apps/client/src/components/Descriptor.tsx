export default function Descriptor({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="mt-4">
      <h2 className="md:text-2xl tracking-wide">{name.toUpperCase()}</h2>
      <p className="text-justify">{description}</p>
    </div>
  );
}
