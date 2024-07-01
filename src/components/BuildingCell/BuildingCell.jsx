import styles from "./BuildingCell.module.css";

export default function BuildingCell({ buildingData, onAdd, onRemove, isAddButton }) {
  return (
    <div className="gridCell" onClick={() => (isAddButton ? onAdd(buildingData) : onRemove(buildingData))}>
      <img draggable={false} src={`./img/residential/${buildingData.image}.webp`} alt={buildingData.image} />
      <h3 className="text-sm">{buildingData.name}</h3>
      <figure className="flex gap-1">
        <span>{buildingData.workersCap}</span>
        <img src="./img/icons/Workers.webp" alt="workers" />
      </figure>

      <button className={`${styles.button} ${isAddButton ? styles.addButton : styles.removeButton}`}></button>

      {buildingData.qty && <span className="amountMarker">{buildingData.qty}</span>}
    </div>
  );
}
