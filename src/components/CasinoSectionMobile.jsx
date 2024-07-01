import casinos from "../json/casino-list.json";
import CasinoItem from "./CasinoItem";

export default function CasinoSection() {
  return (
    <div className="w-75 m-auto">
      <p>MOBILE</p>
      {casinos.map((casino, k) => (
        <CasinoItem key={k} item={casino} />
      ))}
    </div>
  );
}
