export default function CountDown({ endingTime }) {
   const endTime = new Date(endingTime);
  return (
    <div>
      <span>{endTime.toDateString()}</span>
    </div>
  );
}
