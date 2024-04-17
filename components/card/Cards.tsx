import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl px-6 py-32 mx-auto lg:flex gap-2 ">
        <Card width={"lg:w-1/3"} start={false} para={true}/>
        <Card width={"lg:w-2/3 mt-1 lg:mt-0"} start={true} para={false} hover="true"/>
      </div>
    </div>
  );
};

export default Cards;
