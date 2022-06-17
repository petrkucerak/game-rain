import SunflowerBg from "./sunflower-bg";

export default function Cover() {
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <SunflowerBg/>
      <h1 className="text-4xl z-10 absolute">Karolína & Filip</h1>
    </div>
  );
}
