import DrinkList from "@/components/DrinkList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z";

const Bar = async () => {
  // sleep
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(url);

  if(!response.ok){
    throw new Error("Failed api request");
  }
  const data = await response.json();

  console.log(data);

  return <DrinkList drinks={data.drinks} />
};

export default Bar;
