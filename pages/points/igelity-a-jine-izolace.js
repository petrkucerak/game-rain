import Head from "../../components/head";
import Footer from "../../components/footer";
import Point from "../../components/point";

export default function IgelityAJineIzolace() {
  return (
    <main className="w-full font-athiti bg-black min-h-screen text-white text-xl">
      <Head />
      <Point
        name={"Igelity a jiné izolace"}
        describtion="Dnes je svět přeplněn různými plasty a odpady. Kolik z nich by šlo ovšem použít jako těsnění na váš improvizovaný příbytek? No, právě, že moc ne. Proto si musíte jít nějaký opatřit samy."
        coords="50.0767947N, 14.4091872E"
        question="Tyčím se nad řekou, vodu jímám. Koliko podlaží mne obývá."
        answare="7"
        odpoved="#DFDS5as"
      />
      <Footer />
    </main>
  );
}
