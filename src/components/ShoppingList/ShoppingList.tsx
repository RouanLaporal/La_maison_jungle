import { plantList} from "../../data/plantList"
import { IplantList } from "../../interface/IPlantList";
import PlantItem from "../PlantItem/PlantItem";
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
                    <PlantItem name={plant.name} cover={plant.cover} id={plant.id} light={plant.light} water={plant.water}/>
                ))}
            </ul>
        </div>
    )
}
export default ShoppingList