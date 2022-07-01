export default function Point({
  name,
  describtion,
  coords,
  answare,
  question,
  key,
}) {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="w-[85vw] max-w-[1000px] flex flex-col items-start justify-center">
        <h1 className="text-3xl font-bold mt-8 mb-2">{name}</h1>
        <span className="font-mono">{coords}</span>
        <p className="mt-8">{describtion}</p>
        <h2 className="mt-8 text-2xl font-semibold">{question}</h2>
        <span className="italic">Odpověděď zadávej malým písmem</span>
        <input type="text" className="w-full bg-stone-800 my-2 p-2"></input>
        <button className="border border-sunflower rounded-lg px-5 py-2 mt-4 bg-stone-800 text-sunflower">zkontrolovat</button>
      </div>
    </section>
  );
}
