export default function Box() {
  return (
    <div className=" border-gray-400 border w-80 p-4 flex flex-col gap-1">
      <h1 className=" text-gray-800 text-2xl font-bold ">
        Book Cover Design Formula
      </h1>
      <img src="/cover.jpg" width={"120px"} />
      <p className=" text-gray-800">Value: Invaluable</p>
      <p className=" text-gray-800">
        Price: <span className=" text-primary">$0.00</span>
      </p>
    </div>
  );
}
