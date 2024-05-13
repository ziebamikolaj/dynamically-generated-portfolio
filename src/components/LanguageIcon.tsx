import {
  BiLogoCPlusPlus,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJava,
  BiLogoPhp,
  BiLogoPython,
  BiLogoSass,
  BiLogoTypescript,
} from "react-icons/bi";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandCSharp, TbHexagonLetterC } from "react-icons/tb";

const style = "h-8 w-8";

export const LanguageIcon = ({ language }: { language: string | null }) => {
  switch (language) {
    case "C++":
      return <BiLogoCPlusPlus className={style} />;
    case "CSS":
      return <BiLogoCss3 className={style} />;
    case "HTML":
      return <BiLogoHtml5 className={style} />;
    case "Java":
      return <BiLogoJava className={style} />;
    case "JavaScript":
      return <RiJavascriptFill className={style} />;
    case "PHP":
      return <BiLogoPhp className={style} />;
    case "Python":
      return <BiLogoPython className={style} />;
    case "Sass":
      return <BiLogoSass className={style} />;
    case "TypeScript":
      return <BiLogoTypescript className={style} />;
    case "C#":
      return <TbBrandCSharp className={style} />;
    case "C":
      return <TbHexagonLetterC className={style} />;
    default:
      return <PiBracketsCurlyBold className={style} />;
  }
};
