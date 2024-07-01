import styles from "./ResidentalBuildings.module.css";
import residentalData from "../../constants/residentialData.json";
import BuildingCell from "../BuildingCell/BuildingCell";

export default function ResidentalTable({ onAdd, onRemove }) {
  return (
    <div className="container">
      <div className="block">
        <h2>Residental buildings</h2>
        <section className="adaptiveGrid ">
          {residentalData.map((buildingData) => (
            <BuildingCell key={buildingData.id} buildingData={buildingData} onAdd={onAdd} isAddButton={true} />
          ))}
        </section>
      </div>
    </div>
  );
}
