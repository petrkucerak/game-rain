import { IconArrowBigDown, IconArrowBottomBar } from "@tabler/icons";
import Link from "next/link";

export default function Arrow() {
  return (
    <Link href={"#welcome"}>
      <a className="absolute bottom-[12vh] cursor-pointer animate-bounce">
        <IconArrowBigDown size={40} stroke={1.5} />
      </a>
    </Link>
  );
}
