import Content from "../components/content";


export default function Program() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-sunflower drop-shadow-2xl">
      <Content>
        <h2 className="text-6xl mb-6">Harmonogram</h2>
        <ul className="text-2xl">
          <li>12:30 Obřad v kostele sv. Prokopa ve Žďáře nad Sázavou</li>
          <li>14:00 Společné focení před kostelem</li>
          <li>15:15 Oběd</li>
          <li>16:15 Krájení dortu</li>
          <li>18:30 První tanec + večerní raut</li>
        </ul>
        
      </Content>
    </section>
  );
}
