import { IPlantItem } from "../../interface/IPlantItem";
import CareScale from "../CareScale/CareScale";
import "./PlantItem.css";
function PlantItem(props: IPlantItem){
    return (
        <li key={props.id} className="lmj-plant-item">
            <img src={props.cover} alt={`${props.name} cove`} className="lmj-plant-item-cover"/>
            {props.name}
            <div>
                <CareScale careType='water' scaleValue={props.water}/>
                <CareScale careType='light' scaleValue={props.light}/>
            </div>
        </li>
    )
}

export default PlantItem