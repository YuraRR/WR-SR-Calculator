import styles from "./SelectedBuildings.module.css";
import BuildingCell from "../BuildingCell/BuildingCell";

export default function SelectedBuildings({ setTotalConsumption, setSelectedBlds, selectedBlds, onRemove }) {
  return (
    <div className="container">
      <div className="block">
        <h2>Selected buildings</h2>
        {selectedBlds.length == 0 && <p className="p-5">Buildings is not selected</p>}
        <section className="adaptiveGrid">
          {selectedBlds.map((buildingData) => (
            <BuildingCell key={buildingData.id} buildingData={buildingData} onRemove={onRemove} />
          ))}
        </section>
        <button
          className="absolute bottom-0 right-3"
          onClick={() => {
            setSelectedBlds([]);
            setTotalConsumption({});
          }}
        >
          Remove all
        </button>
      </div>
    </div>
  );
}
