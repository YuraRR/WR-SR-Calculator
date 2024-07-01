export default function findBuildingsAmount(consumption, data, conditions) {
  const findSuitableBuilding = (type, key) => {
    let minObject = null;

    for (const item of data) {
      if (item[key] >= consumption && item.type === type && (!minObject || item[key] < minObject[key])) {
        minObject = item;
      }
    }

    if (!minObject) {
      const filteredBuildings = data.filter((bld) => bld.type === type);
      minObject = filteredBuildings.reduce((max, bld) => {
        return bld[key] > max[key] ? bld : max;
      }, filteredBuildings[0]);
    }

    if (minObject.type != "substation") {
      minObject.buildingsAmount = Math.ceil(consumption / minObject[key]);
    }

    return minObject;
  };

  const resultList = conditions.map((bld) => {
    return findSuitableBuilding(bld.type, bld.key);
  });

  return resultList;
}
