import Link from "next/link";
import Content from "../components/content";
import IconGlasses from "./icon-glasses";
import IconRings from "./icon-rings";

export default function Info() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col justify-center items-center">
      <Content>
        <div className="flex lg:flex-row flex-col justify-around my-5 text-2xl">
          <Link href="https://mapy.cz/s/racakajohu">
            <a target="_blank" referrerPolicy="no-referrer">
              <ul className="cursor-pointer flex my-5 lg:my-0">
                <li>
                  <IconRings classes="fill-stone-700 hover:fill-sunflower w-24 ease-out duration-300 transition hover:scale-110" />
                </li>
                <ul className="ml-5 text-stone-800">
                  <li className="font-semibold ">Kostel sv. Prokopa</li>
                  <li>12:30</li>
                </ul>
              </ul>
            </a>
          </Link>
          <Link href="https://mapy.cz/s/kuzofejuro">
            <a target="_blank" referrerPolicy="no-referrer">
              <ul className="cursor-pointer flex my-5 lg:my-0">
                <li>
                  <IconGlasses classes="fill-stone-700 hover:fill-sunflower w-24 ease-out duration-300 transition hover:scale-110" />
                </li>

                <ul className="ml-5 text-stone-800">
                  <li className="font-semibold">Kulturní dům Hamry</li>
                  <li>18:30</li>
                </ul>
              </ul>
            </a>
          </Link>
        </div>
      </Content>
    </section>
  );
}
