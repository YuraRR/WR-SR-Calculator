import EnergyFacility from "../EnergyFacility/EnergyFacility";
import HeatingFacility from "../HeatingFacility/HeatingFacility";
import WaterFacility from "../WaterFacility/WaterFacility";
import styles from "./ConsumptionTabs.module.css";
import { useState } from "react";

export default function ConsumptionTabs({ totalConsumption }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabsData = [
    {
      id: 0,
      title: "Power",
      content: <EnergyFacility totalConsumption={totalConsumption} />,
    },
    {
      id: 1,
      title: "Water",
      content: <WaterFacility totalConsumption={totalConsumption} />,
    },
    {
      id: 2,
      title: "Heat",
      content: <HeatingFacility totalConsumption={totalConsumption} />,
    },
  ];

  return (
    <div className="container">
      <section className="block">
        <h2>Required buildings</h2>
        <div className="flex justify-around py-5 p-2 md:p-5 border-b-2 border-y-neutral-400 mx-2 md:mx-5">
          {tabsData.map((tab) => {
            return (
              <button
                key={tab.id}
                className={`py-2  px-3 md:px-5 flex gap-1 sm:text-sm  md:text-xl ${
                  activeTab == tab.id ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <img className="w-5 my-auto" src={`/img/icons/${tab.title}.webp`} alt={tab.title} />
                {tab.title}
              </button>
            );
          })}
        </div>
        <section className="min-h-96 h-max">{tabsData[activeTab].content}</section>
      </section>
    </div>
  );
}
