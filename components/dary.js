import Content from "../components/content";

export default function Dary() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-yellow-200">
      <Content>
      <h2 className="text-5xl mb-2">Svatební dary</h2>
      <p className="max-w-[1000px] w-[90vw]">
        Když tu svatbu už děláme, tak bychom na ní rádi alespoň trošku vydělali.
        Tak posílejte penízky. Hodně penízků.
      </p>
      </Content>
    </section>
  );
}
