import { useState } from "react";
export default function CountDown({ endingTime }) {

  const endTime = new Date(endingTime);
  let differnece = endTime - Date();
  const [difference, updateDifference] = useState(endTime - Date.now());
  return (
    <div>
      {/* <span>{difference/60/1000}</span> */}
    </div>
  );
}
