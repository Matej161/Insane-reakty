import { Link } from "react-router-dom";
import Statement from "../components/Bohata/Statement";

export default function Bohata() {
  return (
    <>
      <h1>Bohatovo instagram</h1>
      <Statement quote="sisoid" date="2.2.2024"/>
      <Statement quote="pindik" date="2.3.2024"/>
      <Link to={"/"}>
        <p>domu</p>
      </Link>
    </>
  );
}
