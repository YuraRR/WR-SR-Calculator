import styles from "./HeatingFacility.module.css";
import heatingBuildingsData from "../../constants/heatBuildings.json";
import { heatingBldConditions } from "../../constants/buildingsConditions";
import findBuildingsAmount from "../../utils/findBuildingsAmount";

export default function HeatingFacility({ totalConsumption }) {
  const { heatConsumption = 0 } = totalConsumption;
  const waterBuildingsList = findBuildingsAmount(heatConsumption, heatingBuildingsData, heatingBldConditions);

  function findPercentOfUsage(bld, key) {
    const result = (heatConsumption / (bld.buildingsAmount * bld[key])) * 100;
    return `(${result.toFixed(2)}%)`;
  }

  return (
    <>
      {heatConsumption > 1 ? (
        <div className="adaptiveGrid">
          {waterBuildingsList.map((bld) => {
            return (
              <div className="arrow3 gridCell" key={bld.id + Math.random(1)}>
                <img src={`/img/heating/${bld.image}.webp`} alt="" className="icon" />
                <h3>{bld.name}</h3>
                {bld.production && (
                  <span>
                    {bld.production} m³/day {findPercentOfUsage(bld, "production")}
                  </span>
                )}
                {bld.storage && (
                  <span>
                    {bld.storage} m³/day {findPercentOfUsage(bld, "storage")}
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
