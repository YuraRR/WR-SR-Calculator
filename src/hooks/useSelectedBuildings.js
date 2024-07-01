import { useState } from "react";

function useSelectedBuildings(setTotalConsumption) {
  const [selectedBlds, setSelectedBlds] = useState([]);

  const onAdd = (building) => {
    const exist = selectedBlds.find((e) => e.id === building.id);
    if (exist) {
      const newSelectedBlds = selectedBlds.map((e) =>
        e.id === building.id ? { ...exist, qty: exist.qty + 1 } : e
      );
      setSelectedBlds(newSelectedBlds);
    } else {
      const newSelectedBlds = [...selectedBlds, { ...building, qty: 1 }];
      setSelectedBlds(newSelectedBlds);
    }
  };
  const onRemove = (building) => {
    const exist = selectedBlds.find((e) => e.id === building.id);
    console.log(exist);
    if (exist.qty === 1) {
      const newSelectedBlds = selectedBlds.filter((e) => e.id !== building.id);
      setSelectedBlds(newSelectedBlds);
      setTotalConsumption({});
    } else {
      const newSelectedBlds = selectedBlds.map((e) =>
        e.id === building.id ? { ...exist, qty: exist.qty - 1 } : e
      );
      setSelectedBlds(newSelectedBlds);
    }
  };

  return {
    setSelectedBlds,
    selectedBlds,
    onAdd,
    onRemove,
  };
}

export default useSelectedBuildings;
