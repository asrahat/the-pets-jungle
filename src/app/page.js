import WhyAdopt from "@/components/WhyAdopt.jsx";
import Banner from "../components/Banner.jsx";
import Image from "next/image";
import SuccessStories from "@/components/SuccessStories.jsx";
import PetsCare from "@/components/PetsCare.jsx";
import Newsletter from "@/components/NewsLetter.jsx";
import RescueTeam from "@/components/RescueTeam.jsx";

export default function Home() {
  return (
   <div>
    <Banner></Banner>
    <WhyAdopt></WhyAdopt>
    <SuccessStories></SuccessStories>
    <PetsCare></PetsCare>
    <Newsletter></Newsletter>
    <RescueTeam></RescueTeam>
   </div>
  );
}
