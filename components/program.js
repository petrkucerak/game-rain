import Content from "../components/content";

export default function Program() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col justify-center items-center bg-sunflower drop-shadow-2xl py-16 lg:py-0">
      <Content>
        <h2 className="text-6xl mb-6">Harmonogram</h2>
        <ul className="text-2xl ">
          <li className="border-l-4 pl-4 border-stone-800">
            <div className="h-5 w-5 bg-stone-400 rounded-full  border-4 border-stone-800 relative top-6 right-7 "></div>
            <storng className="font-semibold mr-4">12:30</storng> Obřad v kostele sv.
            Prokopa ve Žďáře nad Sázavou
          </li>
          <li className="border-l-4 pl-4 border-stone-800">
            <div className="h-5 w-5 bg-stone-400 rounded-full  border-4 border-stone-800 relative top-6 right-7 "></div>
            <storng className="font-semibold mr-4">14:00</storng> Společné focení
            před kostelem
          </li>
          <li className="border-l-4 pl-4 border-stone-800">
            <div className="h-5 w-5 bg-stone-400 rounded-full  border-4 border-stone-800 relative top-6 right-7 "></div>
            <storng className="font-semibold mr-4">15:15</storng> Oběd
          </li>
          <li className="border-l-4 pl-4 border-stone-800">
            <div className="h-5 w-5 bg-stone-400 rounded-full  border-4 border-stone-800 relative top-6 right-7 "></div>
            <storng className="font-semibold mr-4">16:15</storng> Krájení dortu
          </li>
          <li className="border-l-4 pl-4 border-stone-800 pb-4">
            <div className="h-5 w-5 bg-stone-400 rounded-full  border-4 border-stone-800 relative top-6 right-7 "></div>
            <storng className="font-semibold mr-4">18:30</storng> První tanec +
            večerní raut
          </li>
        </ul>
      </Content>
    </section>
  );
}
