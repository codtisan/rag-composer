import Image from "next/image";
import { Avatar, AvatarImage } from "../ui/avatar";
import { ColourfulText } from "../ui/colourful-text";
import ThemeSwitch from "./theme-switch";
import Logo from "@/app/logo.png";

const TopBar = () => {
  return (
    <div className="size-full flex items-center justify-between shadow-sm border-b-1">
      <div className="h-full ml-2 flex items-center gap-2">
        <Image width={30} height={30} src={Logo} alt="logo" />
        <div className="text-2xl">
          <ColourfulText text="RAGComposer" />
        </div>
      </div>
      <div className="flex flex-row items-center gap-3 mr-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
        </Avatar>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default TopBar;
