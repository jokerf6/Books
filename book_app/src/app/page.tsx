import Image from "next/image";
import Ground from "./components/ground";
import Left from "./components/left";
import Right from "./components/right";

export default function Home() {
  return (
    <main className=" h-screen w-screen flex items-center justify-center">
      <Ground />
      <div className=" w-3/4  h-3/4 z-10 flex">
        <Right />
        <Left />
      </div>
    </main>
  );
}
