import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl py-32 mx-auto flex gap-2 ">
        <Card width={"w-1/3"} start={false} para={true}/>
        <Card width={"w-2/3"} start={true} para={false} hover={'bg-violet-500'}/>
      </div>
    </div>
  );
};

export default Cards;
