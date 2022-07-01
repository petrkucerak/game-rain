import Head from "../../components/head";
import Footer from "../../components/footer";
import Point from "../../components/point";

export default function LuzkovinyAObleceni() {
  return (
    <main className="w-full font-athiti bg-black min-h-screen text-white text-xl">
      <Head />
      <Point
        name={"Lůžkoviny a oblečení"}
        describtion="Neprochladnout v noci? Vyrobit si ochranné obleky před toxickým deštěm? Možná pokud získáte tuto surovinu, tak se vám to povede."
        coords="50.0812672N, 14.4112597E"
        question="V dálce když se zahledíš, zlatou zahrádku na hlavě mám. Co jsem?"
        answare="divadlo"
        odpoved="#národnííí12387"
      />
      <Footer />
    </main>
  );
}
