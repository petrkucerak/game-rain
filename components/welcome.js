import Content from "../components/content";
import SimpleImageSlider from "react-simple-image-slider";

export default function Welcome() {
  const images = [
    // { url: "assets/image/kaja-1.jpg" },
    { url: "assets/image/kaja-3.jpg" },
    { url: "assets/image/kaja-2.jpg" },
    { url: "assets/image/kaja-4.jpg" },
  ];
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-sunflower drop-shadow-2xl py-10 lg:py-0">
      <Content>
        <h2 className="text-6xl mt-2 text-center">Něco o nás</h2>
        <div className="flex lg:flex-row flex-col justify-around my-5">
          <p className="w-full lg:mr-5 mt-5 text-xl">
            Biliónech vascem karavel myši srovnatelné paliva jiní tj. spouští
            měly přesněji lze projevy syndrom, výpravy{" "}
            <strong>320denní poslechnout</strong> ho neonu. Mlze týmem, reliéfu,
            výrazný, jehož, od u trpělivě geology o zajímavou háčků. Utká:
            povodí poskytujících oddělující u války mzdu dáli. Vysoké bažin,
            vidět tu tisíci odhalil zatím, pyramidy vějíř u těžko k vybrané ale
            vládců náš dobyvačné tvrdě, divný nervových bažinatou na a nalezení.
            Dospělého k čím i obličeje okem.
          </p>
          <div
            className="border-4 border-white rounded drop-shadow-2xl max-w-[1000px] w-[90vw] lg:mt-0 mt-5 h-full"
          >
            <img src="assets/image/kaja-3.jpg"></img>
          </div>
        </div>
      </Content>
    </section>
  );
}
