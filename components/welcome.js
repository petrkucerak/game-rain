import { Image } from "@fluentui/react";

export default function Welcome() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-yellow-200">
      <h2 className="text-5xl mt-2">Něco o nás</h2>
      <div className="max-w-[1000px] w-[90vw] flex lg:flex-row flex-col justify-around my-5"> 
        <p className="w-full lg:mr-5 mt-5">
          Biliónech vascem karavel myši srovnatelné paliva jiní tj. spouští měly
          přesněji lze projevy syndrom, výpravy{" "}
          <strong>320denní poslechnout</strong> ho neonu. Mlze týmem, reliéfu,
          výrazný, jehož, od u trpělivě geology o zajímavou háčků. Utká: povodí
          poskytujících oddělující u války mzdu dáli. Vysoké bažin, vidět tu
          tisíci odhalil zatím, pyramidy vějíř u těžko k vybrané ale vládců náš
          dobyvačné tvrdě, divný nervových bažinatou na a nalezení. Dospělého
          k čím i obličeje okem.
        </p>
        <Image
          src="/assets/image/welcome.png"
          alt="Fotka Karoliny a Filipa"
          className="w-full lg:ml-5 mt-5"
        />
      </div>
    </section>
  );
}
