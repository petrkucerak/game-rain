import Content from "../components/content";
import SimpleImageSlider from "react-simple-image-slider";

export default function Welcome() {
  const images = [
    { url: "assets/image/kaja-1.jpg" },
    { url: "assets/image/kaja-2.jpg" },
    { url: "assets/image/kaja-3.jpg" },
    { url: "assets/image/kaja-4.jpg" },
  ];
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-sunflower">
      <Content>
        <h2 className="text-5xl mt-2">Něco o nás</h2>
        <div className="flex lg:flex-row flex-col justify-around my-5">
          <p className="w-full lg:mr-5 mt-5">
            Biliónech vascem karavel myši srovnatelné paliva jiní tj. spouští
            měly přesněji lze projevy syndrom, výpravy{" "}
            <strong>320denní poslechnout</strong> ho neonu. Mlze týmem, reliéfu,
            výrazný, jehož, od u trpělivě geology o zajímavou háčků. Utká:
            povodí poskytujících oddělující u války mzdu dáli. Vysoké bažin,
            vidět tu tisíci odhalil zatím, pyramidy vějíř u těžko k vybrané ale
            vládců náš dobyvačné tvrdě, divný nervových bažinatou na a nalezení.
            Dospělého k čím i obličeje okem.
          </p>
          <SimpleImageSlider
            width="90vw"
            height="50vh"
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>
      </Content>
    </section>
  );
}
