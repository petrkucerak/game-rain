export default function Welcome() {
  return (
    <section className="flex w-full flex-col items-center justify-center min-h-screen">
      <div className="w-[90vw] max-w-[1000px] flex flex-col items-center justify-center my-8">
        <h2 className="text-4xl font-bold mb-4">Hlášení rozhlasu...</h2>
        <p className="mb-4">
          Prásk, buch, čvacht, … Už je to několik dnů, co se nad Českou
          republikou přehánějí přívalodév deště, které ale nejsou přírodního
          původu. Spousta lidí by se mohlo odmívat, že je stvořila matka země.
          Opak je pravdou, jsou to produkty speciální tajné zbraně o níž jste se
          dozvěděli před několika minutami skrze vysílání. Teď záleží jenom na
          vás, jak se rozhodnete zachovat a jak budete postupovat dále.
        </p>
        <p>
          Vaším úkolem je vybudovat příbytek, který vás uchrání před
          nebezpečnými dešti. Dosáhnete toho ale pouze tak, že získáte suroviny,
          které jsou ukryté kolem vás. Polohy surovin máte vyznačené na mapě.
          Abyste ji vždy získali, musíte správně odpovědět na danou otázku.
        </p>
      </div>
      <div className="w-[90vw] max-w-[1000px] flex flex-col items-center justify-center my-8">
        <h2 className="text-4xl font-bold mb-4">Místa pro zisk surovin...</h2>
        <ol className="list-decimal">
          <li>Dřevo a trámy - 123456789, 123456789: ... ... ... ?</li>
          <li>Igelity a jiné izolace</li>
          <li>Zdravotnické potřeby</li>
          <li>Elektrotechnika a nářadí</li>
          <li>Jídlo a potraviny</li>
          <li>Lůžkoviny a oblečení</li>
          <li>Umělecké potřeby a knihy</li>
        </ol>
      </div>
    </section>
  );
}
