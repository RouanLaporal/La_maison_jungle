import { plantList, IplantList } from "../../data/plantList"
import './ShoppingList.css';
function ShoppingList(){
    const categories = plantList.reduce((acc:any, plant: IplantList) =>
        acc.includes(plant.category) ? acc : [...acc, plant.category], []
    )
    console.log(categories)
    return(
        <div>
            <ul>
                {categories.map((category:string) =>(
                    <li key={category}>{category}</li>
                ))}
            </ul>
            <ul role="dialog" className="lmj-plant-list">
                {plantList.map((plant) =>(
                    <li key={plant.id} className="lmj-plant-item">{plant.name} {plant.isSpecialOffer && <div className="lmj-sales">"Soldes"</div>}</li>
                ))}
            </ul>
        </div>
    )
}
export default ShoppingList