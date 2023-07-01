import Box from "./components/box";
import IntroBox from "./components/introBox";
import Nav from "./components/nav";
import Story from "./components/story";

export default function Home() {
  return (
    <main className=" w-screen h-screen py-4 px-20 overflow-x-hidden flex flex-col gap-3">
      <IntroBox />

      <Nav />
      <div className=" flex  justify-between h-full items-center">
        <div className=" flex flex-col gap-1 ">
          <Box />
          <Box />
        </div>
        <div className="flex flex-col gap-1 m-0 p-0 h-full ">
          <img src="/king.png" className=" h-full" />
        </div>

        <div className=" flex flex-col gap-1 ">
          <Box />
          <Box />
        </div>
      </div>
      <Story />
    </main>
  );
}
