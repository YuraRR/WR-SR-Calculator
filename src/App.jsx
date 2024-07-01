import Header from "./components/Header/Header";
import useSelectedBuildings from "./hooks/useSelectedBuildings";
import ResidentalBuildings from "./components/ResidentalBuildings/ResidentalBuildings";
import SelectedBuildings from "./components/SelectedBuildings/SelectedBuildings";
import CalculatedInfo from "./components/CalculatedInfo/CalculatedInfo";
import ConsumptionTabs from "./components/ConsumptionTabs/ConsumptionTabs";
import { useState } from "react";

export default function App() {
  const [totalConsumption, setTotalConsumption] = useState({});
  const { setSelectedBlds, selectedBlds, onAdd, onRemove } = useSelectedBuildings(setTotalConsumption);

  return (
    <>
      <Header></Header>
      <ResidentalBuildings onAdd={onAdd} onRemove={onRemove}></ResidentalBuildings>
      <SelectedBuildings
        setTotalConsumption={setTotalConsumption}
        setSelectedBlds={setSelectedBlds}
        selectedBlds={selectedBlds}
        onRemove={onRemove}
      ></SelectedBuildings>
      <CalculatedInfo
        setTotalConsumption={setTotalConsumption}
        totalConsumption={totalConsumption}
        selectedBlds={selectedBlds}
      ></CalculatedInfo>
      <ConsumptionTabs totalConsumption={totalConsumption}></ConsumptionTabs>
    </>
  );
}
