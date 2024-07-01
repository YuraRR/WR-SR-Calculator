import CalculatedBlock from "../CalculatedBlock/CalculatedBlock";
import EnergyFacility from "../EnergyFacility/EnergyFacility";
import { useEffect } from "react";

export default function CalculatedInfo({ setTotalConsumption, totalConsumption, selectedBlds }) {
  useEffect(() => {
    if (selectedBlds.length > 0) {
      const workersAmount = findSum("workersCap");
      const consumptionData = {
        workersAmount: workersAmount,
        energyPerHourSum: findSum("energy").toFixed(1),
        energyConsumption: (findSum("wattage") / 1000).toFixed(2),
        waterConsumption: findSum("waterCons").toFixed(1),
        heatConsumption: findSum("heatTank").toFixed(1),
        foodConsumption: findFoodAmound("food", workersAmount).toFixed(2),
        meatConsumption: findFoodAmound("meat", workersAmount).toFixed(2),
      };
      setTotalConsumption(consumptionData);
    }
  }, [selectedBlds, setTotalConsumption]);

  const valuesData = [
    {
      text: `Total workers`,
      value: `${totalConsumption.workersAmount || 0} workers`,
      image: "Workers",
    },
    {
      text: `Energy per hour`,
      value: `${totalConsumption.energyPerHourSum || 0} MWh`,
      image: "Power",
    },
    {
      text: `Energy consumption`,
      value: `${totalConsumption.energyConsumption || 0}  MW `,
      image: "Power",
    },
    {
      text: `Water consumption`,
      value: `${totalConsumption.waterConsumption || 0}  m³/day`,
      image: "Water",
    },
    {
      text: `Heat consumption`,
      value: `${totalConsumption.heatConsumption || 0}  m³/day`,
      image: "Heat",
    },
  ];
  const productsData = [
    {
      text: `Food consumption`,
      value: `${totalConsumption.foodConsumption || 0}  t/day`,
      image: "Food",
    },
    {
      text: `Meat consumption`,
      value: `${totalConsumption.meatConsumption || 0}  t/day`,
      image: "Meat",
    },
  ];

  function findSum(value) {
    return selectedBlds.reduce((acc, building) => acc + building[value] * building.qty, 0);
  }
  function findFoodAmound(type, workersAmount) {
    return workersAmount * (type === "food" ? 0.00041 : 0.00013);
  }

  return (
    <div className="container">
      <section className="block">
        <h2>Calculated Info</h2>
        <div className="flex flex-wrap">
          <div className="p-5">
            {valuesData.map((item) => (
              <CalculatedBlock key={item.text} item={item} />
            ))}
          </div>
          <div className="p-5">
            {productsData.map((item) => (
              <CalculatedBlock key={item.text} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
