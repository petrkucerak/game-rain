import Head from "../../components/head";
import Footer from "../../components/footer";
import Point from "../../components/point";

export default function DreavoATramy() {
  return (
    <main className="w-full font-athiti bg-black min-h-screen text-white text-xl">
      <Head />
      <Point
        name={"Dřevo a trámy"}
        describtion="Muž hloupý stavěl dům svůj na písku, pak přišel velký mrak. Déšť padal a voda stoupala... Muž moudrý stavěl dům svůj na skále a dům tam pevně stál... Vy ale nemáte skálu, tak si musíte pomoci konstrukcí a to pevnou!"
        coords="50.0734350N, 14.4040114E"
        question="Jsem nad dveřmi pevné stavby."
        answare="václav"
        odpoved="#54k3425ON^"
      />
      <Footer />
    </main>
  );
}
