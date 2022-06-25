import SunFlowers from "../components/sun-flowers";
import Arrow from "./arrow";
import CountDown from "./count-down";

export default function Cover() {
  return (
    <header className="w-full flex flex-col justify-center items-center min-h-[90vh]">
      <h1 className="text-5xl md:text-7xl text-center z-10">
        Karolína & Filip
      </h1>
      <p className="text-2xl md:text-4xl z-10">10. září 2022</p>
      <CountDown endingTime={"2022-06-25 15:00:00"} />
      <SunFlowers />
      <Arrow />
    </header>
  );
}
