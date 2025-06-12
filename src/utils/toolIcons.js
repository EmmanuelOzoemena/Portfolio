import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiChartdotjs,
  SiSass,
  SiThemoviedatabase,
} from "react-icons/si";

const toolIcons = {
  react: <FaReact color="#61DAFB" />,
  tailwind: <SiTailwindcss color="#38BDF8" />,
  nodejs: <FaNodeJs color="#3C873A" />,
  express: <SiExpress color="#000000" />,
  mongodb: <SiMongodb color="#47A248" />,
  firebase: <SiFirebase color="#FFCA28" />,
  chartjs: <SiChartdotjs color="#FF6384" />,
  scss: <SiSass color="#CD6799" />,
  html: <FaHtml5 color="#E44D26" />,
  css: <FaCss3Alt color="#1572B6" />,
  omdb: <SiThemoviedatabase color="#01B4E4" />, // using TMDB icon as placeholder
};

export default toolIcons;
