export default function CalculatedBlock({ item }) {
  return (
    <div key={item.text} className="flex flex-wrap gap-1 ">
      <img src={`./img/icons/${item.image}.webp`} alt={item.image} />
      <span className="w-52 tracking-wider">{item.text} : </span>
      <span className="">{item.value}</span>
    </div>
  );
}
