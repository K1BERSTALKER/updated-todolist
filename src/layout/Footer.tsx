import { React, Redux, Shadcn, Tailwind } from "@/icons";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center px-4">
      <div className="flex flex-col gap-4">
        <h3 className="text-base opacity-70">Used:</h3>
        <ul className="flex gap-4">
          <li className="opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
            <React className="w-24 h-24" />
          </li>
          <li className="opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
            <Redux className="w-24 h-24" />
          </li>
          <li className="opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
            <Tailwind className="w-24 h-24" />
          </li>
          <li className="opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
            <Shadcn className="w-24 h-24" />
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-sm opacity-70">Developed:</p>
        <Logo href="/" />
      </div>
    </footer>
  );
}
