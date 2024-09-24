import Image from "next/image";
import Link from "next/link";

interface DrinkPageProps {
  params: {
    id: string;
  };
}

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getDrink = async (id: string) => {
  const response = await fetch(`${url}${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch a drink!");
  }
  return response.json();
};

const DrinkPage = async ({ params }: any) => {
  const data = await getDrink(params.id);

  const name = data?.drinks[0]?.strDrink;
  const thumb = data?.drinks[0]?.strDrinkThumb;
  const instructions = data?.drinks[0]?.strInstructions;

  console.log(data);

  // console.log(params.id)
  return (
    <div>
      <Link href="/" className="btn btn-primary mt-8 mb-10">
        Back
      </Link>
      <Image
        src={thumb}
        width={300}
        height={300}
        alt=""
        className="text-4xl mb-8"
      />
      <h1 className="text-4xl mb-8">{name}</h1>
      <p>{instructions}</p>
    </div>
  );
};

export default DrinkPage;
