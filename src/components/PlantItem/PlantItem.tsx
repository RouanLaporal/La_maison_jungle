import { IPlantItem } from "../../interface/IPlantItem";
import CareScale from "../CareScale/CareScale";
import "./PlantItem.css";

function handleClick(plantName: string){
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}
function PlantItem(props: IPlantItem){
    return (
        <li className="lmj-plant-item" onClick={() => handleClick(props.name)}>
            <span className="lmj-plant-item-price">{props.price}</span>
            <img src={props.cover} alt={`${props.name} cover`} className="lmj-plant-item-cover"/>
            {props.name}
            <div>
                <CareScale careType='water' scaleValue={props.water}/>
                <CareScale careType='light' scaleValue={props.light}/>
            </div>
        </li>
    )
}

export default PlantItem