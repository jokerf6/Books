import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex flex-row-reverse w-full text-gray-800 gap-2">
      <Link href={"dashboard"}>View Account</Link>
      <div className="">|</div>
      <Link href={"/cart"}>View Cart</Link>
    </div>
  );
}
