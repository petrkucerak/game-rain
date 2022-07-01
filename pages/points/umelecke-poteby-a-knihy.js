import Head from "../../components/head";
import Footer from "../../components/footer";
import Point from "../../components/point";

export default function UmeleckePotrebyAKnihy() {
  return (
    <main className="w-full font-athiti bg-black min-h-screen text-white text-xl">
      <Head />
      <Point
        name={"Umělecké potřeby a knihy"}
        describtion="Umění vždy bylo a bude důležité. Může se zdát, že ne, ale díky němu bylo vyhráno i spousta bitev. Vždyť husité zahnali svým mocným zpěvem křižáky na ústup, Izraelský národ zničil brány Jericha."
        coords="50.0841581N, 14.4083333E"
        question="Jsem středobodem tohoto místa. Kolikrát musíš stoupat, aby jsi byl u mne?"
        answare="3"
        odpoved="#adsa5!as!"
      />
      <Footer />
    </main>
  );
}
