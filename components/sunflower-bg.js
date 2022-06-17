import { Image } from "@fluentui/react";
export default function SunflowerBg() {
  return (
    <div>
      <Image
        className=" absolute top-0 left-0 z-0 h-screen"
        src="/assets/image/cover-left.png"
        alt="cover left"
      ></Image>
      <Image
        className=" absolute top-0 right-0 z-0 h-screen"
        src="/assets/image/cover-right.png"
        alt="cover right"
      ></Image>
    </div>
  );
}
