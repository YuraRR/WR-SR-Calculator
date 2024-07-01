import styles from "./EnergyFacility.module.css";
import findSuitableWires from "../../utils/findSuitableWires";
import findPowerPlantsAmount from "../../utils/findPowerPlantsAmount";

export default function EnergyFacility({ totalConsumption }) {
  const { energyConsumption } = totalConsumption;

  const wiresList = findSuitableWires(energyConsumption);
  const powerPlantsAmount = findPowerPlantsAmount(energyConsumption);

  return (
    <>
      {energyConsumption > 0 ? (
        <div>
          <div className="adaptiveGrid">
            {powerPlantsAmount.map((bld) => {
              return (
                <div className="gridCell" key={bld.id}>
                  <img src={`/img/energy/powerPlants/${bld.image}.webp`} alt="" className="icon" />
                  <h3>{bld.name}</h3>
                  <p>{bld.usagePercent}</p>
                  <span className="amountMarker">{bld.buildingsAmount}</span>
                </div>
              );
            })}
          </div>

          <div className="border-t-2 border-y-neutral-400 mx-0 md:mx-5 adaptiveGrid">
            {wiresList.map((e) => {
              return (
                <div className="gridCell  arrow" key={e.id}>
                  <img src={`/img/energy/wires/${e.image}.webp`} alt={e.image} className="icon" />
                  <h3>{e.name}</h3>
                  <p>{e.throughput} MW</p>
                  <span className="amountMarker">{e.wiresAmount || 1}</span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p className="p-5">Buildings is not selected</p>
      )}
    </>
  );
}
