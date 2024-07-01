import styles from "./WaterFacility.module.css";
import waterBuildingsData from "../../constants/waterBuildings.json";
import { waterBldConditions } from "../../constants/buildingsConditions";
import findBuildingsAmount from "../../utils/findBuildingsAmount";

export default function WaterFacility({ totalConsumption }) {
  const { waterConsumption = 0 } = totalConsumption;
  const waterBuildingsList = findBuildingsAmount(waterConsumption, waterBuildingsData, waterBldConditions);

  function findPercentOfUsage(bld, key) {
    const result = (waterConsumption / (bld.buildingsAmount * bld[key])) * 100;
    return `(${result.toFixed(2)}%)`;
  }

  return (
    <>
      {waterConsumption > 1 ? (
        <div className="adaptiveGrid">
          {waterBuildingsList.map((bld) => {
            return (
              <div className="arrow4 gridCell" key={bld.id + Math.random(1)}>
                <img src={`/img/water/${bld.image}.webp`} alt="" className="icon" />
                <h3>{bld.name}</h3>
                {bld.production && (
                  <span>
                    {bld.production} m³/day {findPercentOfUsage(bld, "production")}
                  </span>
                )}
                {bld.throughput && (
                  <span>
                    {bld.throughput} m³/day {findPercentOfUsage(bld, "throughput")}
                  </span>
                )}

                <span className="amountMarker">{bld.buildingsAmount || 1}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="p-5">Buildings is not selected</p>
      )}
    </>
  );
}
