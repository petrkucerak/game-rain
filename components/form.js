import Content from "../components/content";

export default function Form() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center ">
      <Content>
        <h2 className="text-5xl mb-2">Potvrzení účasti</h2>
        <p className="max-w-[1000px] w-[90vw]">
          Pokud nechceš být o hlasdu, tak nám prosím vyplň tenhlenc formulář.
          Nekapíš to, tvůje smůla, budeš o hladuuuuu!
        </p>
      </Content>
    </section>
  );
}
