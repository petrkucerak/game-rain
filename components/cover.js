import Image from "next/image";

export default function Cover() {
  
  return (
    <header className="w-full flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-5xl text-center">Karolína & Filip</h1>
      <p className="text-2xl">10.9.2022</p>
      <Image
        src="/assets/image/cover-left-button.png"
        alt="image-alt-text"
        width={500}
        height={500}
      />
    </header>
  );
}
