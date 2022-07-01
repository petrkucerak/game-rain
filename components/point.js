const bida = [
  "Bída, tohlenc to není OK",
  "špatně",
  "Zkus to jináč",
  "Jsi na míle daleko",
  "Jaaaj... Vedle!",
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function check({ answare, odpoved }) {
  const value = document.getElementById("input").value;
  if (value === answare) {
    console.log(odpoved);
    document.getElementById("output").innerText = `Klíč: ${odpoved}`;
    document.getElementById("output").classList.remove("text-red-400");
    document.getElementById("output").classList.add("text-green-400");
  } else {
    document.getElementById("output").innerText =
      bida[getRandomInt(0, bida.length)];
    document.getElementById("output").classList.remove("text-green-400");
    document.getElementById("output").classList.add("text-red-400");
  }
}

export default function Point({
  name,
  describtion,
  coords,
  answare,
  question,
  odpoved,
}) {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="w-[85vw] max-w-[1000px] flex flex-col items-start justify-center">
        <h1 className="text-3xl font-bold mt-8 mb-2">{name}</h1>
        <span className="font-mono">{coords}</span>
        <p className="mt-8">{describtion}</p>
        <h2 className="mt-8 text-2xl font-semibold">{question}</h2>
        <span className="italic">Odpověděď zadávej malým písmem</span>
        <input
          id="input"
          type="text"
          className="w-full bg-stone-800 my-2 p-2"
        ></input>
        <button
          onClick={() => check({ answare, odpoved })}
          className="border border-sunflower rounded-lg px-5 py-2 mt-4 bg-stone-800 text-sunflower"
        >
          zkontrolovat
        </button>
        <span id="output" className="font-mono my-8"></span>
      </div>
    </section>
  );
}
