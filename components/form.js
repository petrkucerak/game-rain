import Content from "../components/content";

export default function Form() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-sunflower">
      <Content>
        <h2 className="text-5xl mb-2">Potvrzení účasti</h2>
        <p className="max-w-[1000px] w-[90vw]">
          Pokud nechceš být o hladu, tak nám prosím vyplň tenhlenc formulář.
          Nekapíš to, tvoje smůla, budeš o hladuuuuu!
        </p>
      </Content>
    </section>
  );
}
