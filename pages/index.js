import Cover from "../components/cover";
import Dary from "../components/dary";
import Form from "../components/form";
import Kontakty from "../components/kontakty";
import Meta from "../components/meta";
import Program from "../components/program";
import Welcome from "../components/welcome";

export default function Home() {
  return (
    <main className="w-full font-Neucha">
      <Meta />
      <Cover />
      <Welcome />
      <Program />
      <Dary />
      <Form />
      <Kontakty />
    </main>
  );
}
