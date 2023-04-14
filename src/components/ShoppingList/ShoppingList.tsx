import { plantList} from "../../data/plantList"
import { IplantList } from "../../interface/IPlantList";
import CareScale from "../CareScale/CareScale";
import './ShoppingList.css';
function ShoppingList(){
    const categories = plantList.reduce((acc:any, plant: IplantList) =>
        acc.includes(plant.category) ? acc : [...acc, plant.category], []
    )
    return(
        <div>
            <ul>
                {categories.map((category:string) =>(
                    <li key={category}>{category}</li>
                ))}
            </ul>
            <ul role="dialog" className="lmj-plant-list">
                {plantList.map((plant) =>(
                    <li key={plant.id} className="lmj-plant-item">
                        {plant.name} 
                        {plant.isBestSale && <span>🔥</span>}
                        <CareScale careType='water' scaleValue={plant.water}/>
                        <CareScale careType='light' scaleValue={plant.light}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ShoppingList