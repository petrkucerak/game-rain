import Content from "../components/content";
import { IconBuildingChurch, IconGlassFull } from "@tabler/icons";

export default function Info() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col justify-center items-center">
      <Content>
        <div className="flex lg:flex-row flex-col justify-around my-5 text-2xl">
          <ul className="cursor-pointer">
            <li>
              <IconBuildingChurch size={50} />
            </li>
            <li>Kostel sv. Prokopa</li>
            <li>11:00</li>
          </ul>
          <ul className="cursor-pointer">
            <li>
              <IconGlassFull size={50} />
            </li>
            <li>Kultuřák na vidlákově</li>
            <li>18:00</li>
          </ul>
        </div>
      </Content>
    </section>
  );
}
