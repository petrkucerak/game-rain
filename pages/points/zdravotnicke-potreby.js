import Head from "../../components/head";
import Footer from "../../components/footer";
import Point from "../../components/point";

export default function ZdravotnickePotreby() {
  return (
    <main className="w-full font-athiti bg-black min-h-screen text-white text-xl">
      <Head />
      <Point
        name={"Zdravotnické potřeby"}
        describtion="Už od dob dávných platí, že vědět, znamená mnoho. A v medicíně především. Vždyť například s první pitvou bylo objeveno tolik nových věcí. Chcete-li získat zdravotnické potřeby, na kterých zajisté bude záviset vaše přežití, musíte správně odpovědět na otázku."
        coords="50.0841581N, 14.4083333E"
        question="Pevné jak ze železa jsme. Tvoříme a chodíme a často ťukáme. Kolik nás je?"
        answare="60"
        odpoved="#sdfDS58*"
      />
      <Footer />
    </main>
  );
}
