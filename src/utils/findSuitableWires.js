import wiresData from "../constants/wiresData.json";
export default function findSuitableWires(energyConsumption) {
  const findSuitableWire = (minValue, maxValue = 18) => {
    let minObject = null;
    let maxObject = null;

    for (const item of wiresData) {
      if (
        item.throughput >= minValue &&
        item.throughput <= maxValue &&
        item.voltage != "substation" &&
        (!minObject || item.throughput < minObject.throughput)
      ) {
        minObject = item;
      }
      if ((item.voltage != "substation" && !maxObject) || item.throughput > maxObject.throughput) {
        maxObject = item;
      }
    }

    return minObject || maxObject;
  };

  const requiredWires = [];
  const initialWire = findSuitableWire(energyConsumption);

  if (initialWire) {
    requiredWires.push(initialWire);

    if (energyConsumption > 18) {
      !requiredWires[0].wiresAmount ? (requiredWires[0].wiresAmount = 1) : requiredWires[0].wiresAmount++;
    }

    if (initialWire.voltage === "high") {
      requiredWires.push({
        ...findSuitableWire(2, 2.35),
        wiresAmount: Math.round(initialWire.throughput / 2.35),
      });
    }
    requiredWires.push({
      ...wiresData.find((e) => e.voltage == "substation"),
      wiresAmount: Math.round(initialWire.throughput / 2.35),
    });
  }
  return requiredWires;
}
