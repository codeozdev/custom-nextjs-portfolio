import ProjectItem from "./ProjectItem";
import mapImg from "../assets/map.png";
import borsaImg from "../assets/borsa.png";
import twitchImg from "../assets/twitch.png";
import netflixImg from "../assets/netflix.png";

export default function Projects() {
  return (
    <div id="proje" className="max-w-[1040px] m-auto md:pl-20 p-4 cursor-pointer">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, qui
        sunt. Dolorum pariatur incidunt, dolorem animi, in esse, quisquam
        assumenda officiis aliquid excepturi illum! Molestiae quidem fugit
        impedit atque expedita.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={mapImg} title='Map App' />
        <ProjectItem img={borsaImg} title='Stock App' />
        <ProjectItem img={netflixImg} title='Netflix App' />
        <ProjectItem img={twitchImg} title='Twtich App' />
      </div>
    </div>
  );
}
