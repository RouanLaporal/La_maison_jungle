import { plantList} from "../../data/plantList"
import { IplantList } from "../../interface/IPlantList";
import PlantItem from "../PlantItem/PlantItem";
import { ICartState } from "../../interface/ICartState";
import './ShoppingList.css';
function ShoppingList(props:ICartState){
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
                    <div key={plant.id}>
                        <PlantItem name={plant.name} cover={plant.cover} id={plant.id} light={plant.light} water={plant.water}/>
                        <button onClick={() => props.updateCart(props.cart + 1)}>Ajouter</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}
export default ShoppingList