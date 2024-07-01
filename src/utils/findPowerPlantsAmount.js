import powerPlantsData from "../constants/powerPlants.json";
export default function findPowerPlantsAmount(energyConsumption) {
  function findPercentOfUsage(bld) {
    const result = (energyConsumption / (bld.buildingsAmount * bld.wattage)) * 100;
    return `(${result.toFixed(2)}%)`;
  }

  powerPlantsData.map((bld) => (bld.buildingsAmount = Math.ceil(energyConsumption / bld.wattage)));
  powerPlantsData.map((bld) => (bld.usagePercent = findPercentOfUsage(bld)));

  return powerPlantsData;
}
