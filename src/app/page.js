import WhyAdopt from "@/components/WhyAdopt.jsx";
import Banner from "../components/Banner.jsx";
import Image from "next/image";
import SuccessStories from "@/components/SuccessStories.jsx";

export default function Home() {
  return (
   <div>
    <Banner></Banner>
    <WhyAdopt></WhyAdopt>
    <SuccessStories></SuccessStories>
   </div>
  );
}
