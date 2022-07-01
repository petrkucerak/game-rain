import Footer from "../components/footer";
import Head from "../components/head";
import Welcome from "../components/welcome";

export default function Home() {
  return (
    <main className="w-full font-athiti bg-black min-h-screen text-white text-xl">
      <Head />
      <Welcome />
      <Footer />
    </main>
  );
}
