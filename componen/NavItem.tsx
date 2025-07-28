import { DiVim } from "react-icons/di";

type NavItemProps = {
    iconSrc: string;
    label:string;
    active?:boolean;
}
export default function NavItem({ iconSrc, label,active = false }: NavItemProps) {
  return (
    <div className="flex flex-col items-center justify-start  px-4 py-2 cursor-pointer lg:flex-row lg:justify-center ">
      <img src={iconSrc} alt={label} className="w-[5vh] h-[4vh] md:w-[5vh] md:h-[5vh]  xl:w-[5vh] xl:h-[5vh] mb-1" />
      <span className="text-[10px] text-gray-800 xl:text-sm">{label}</span>
    </div>
  );
}
