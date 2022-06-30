import Content from "../components/content";

export default function Welcome() {
  const images = [
    { url: "assets/image/kaja-3.jpg" },
    { url: "assets/image/kaja-2.jpg" },
    { url: "assets/image/kaja-4.jpg" },
    { url: "assets/image/welcome.png" },
  ];
  return (
    <section
      id="welcome"
      className="w-full min-h-[90vh] flex flex-col justify-center items-center background-sun md:background-sun-fixed py-10 lg:py-0"
    >
      <Content>
        <h2 className="text-6xl mt-2 text-center">Něco o nás</h2>
        <div className="flex lg:flex-row flex-col justify-around my-5">
          <p className="w-full lg:mr-5 mt-5 text-xl">
            V jakém městě jsi vyrůstal? Kája: ve Žďáře nad Sázavou Filip: v
            Hradci Králové Jaké máš koníčky? Kája: jízda na kole, skládání
            puzzlí, čtení knížek, hudba Filip: hasičský sport, skaut, volejbal,
            tanec Hraješ na něco? Kája: na klavír Filip: na kytaru Kde jste se
            poprvé potkali? Poprvé jsme se potkali na spolču ve VKH v Hradci
            Králové. Kdy jste zjistili, že spolu chodíte? Bylo to na podzim roku
            2019. Stalo se to při přednášce Tomáše Halíka (neptejte se o čem
            byla). Po skončení přednášky jsme se vzali za ruce. Od té chvíle
            jsme spolu. Těšíme se na vás 😊
          </p>
          <div className="border-4 border-white rounded drop-shadow-2xl max-w-[1000px] w-[85vw] lg:mt-0 mt-5 h-full">
            <img
              src={images[Math.floor(Math.random() * images.length) + 0].url}
            ></img>
          </div>
        </div>
      </Content>
    </section>
  );
}
