import Head from "../../components/head";
import Footer from "../../components/footer";
import Point from "../../components/point";

export default function ElektrotechnikaANaradi() {
  return (
    <main className="w-full font-athiti bg-black min-h-screen text-white text-xl">
      <Head />
      <Point
        name={"Elektrotechnika a nářadí"}
        describtion="S dobrým generátorem, slušnou audiotechnikou a nějakými světly byste mohli celé deštivé období přečkat jako velkou party. Nebo raději použijete něco jiného? "
        coords="50.0827442N, 14.4170369E"
        question="Jaký je součet čísel, která se objevují na autech, když se rozhlédneš kolem sebe?"
        answare="14"
        odpoved="#bengaaa"
      />
      <Footer />
    </main>
  );
}
