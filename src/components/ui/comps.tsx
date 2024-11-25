import { ReactLenis } from "lenis/dist/lenis-react";
import {

  motion,

  useMotionTemplate,

  useScroll,

  useTransform,
} from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef } from "react";

const SECTION_HEIGHT = 1500;

const Hero = () => {

  return (
    <div>
      <div
        className="w-full relative bg-[#d7d9d4]"
        style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)`}}>
        <CenterImage />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#d7d9d4] " />
      </div>
      <div className=" h-screen w-screen bg-[#d7d9d4]" />
    </div>
  );
};

const CenterImage = () => {

  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25,0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75,100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1,0]);

  const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ["150%","100%"]);



  return (
  <motion.div
  className="sticky top-0 h-screen w-full"
  style={{
    opacity,
    backgroundSize,
    clipPath,
    backgroundImage:"url(/lib/topo.svg)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
     }}
  />

  );
}

const ParallaxImages = () => {

  return (
    <div className="mx-auto flex max-w-5xl px-4 pt-[200px]">
      <div className="font-martian font-extrabold text-6xl relative z-20 text-primary">Syed Nasir</div>
    </div>
    );
}


const ParallaxImg = ({ className, alt, src, start, end }) => {}

export { Hero, CenterImage };
