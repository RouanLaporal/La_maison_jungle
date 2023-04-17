import { plantList} from "../../data/plantList"
import { IplantList } from "../../interface/IPlantList";
import PlantItem from "../PlantItem/PlantItem";
import { ICartState } from "../../interface/ICartState";
import './ShoppingList.css';
function ShoppingList(props:ICartState){
    const categories = plantList.reduce((acc:any, plant: IplantList) =>
        acc.includes(plant.category) ? acc : [...acc, plant.category], []
    )
    function addToCart(name:string, price:number){
        const currentPlantSaved = props.cart.find((plant) => plant.name === name)
        if(currentPlantSaved) {
            const cartFilteredCurrentPlant = props.cart.filter(
                (plant) => plant.name !== name
            )
            props.updateCart([
                ...cartFilteredCurrentPlant, {name, price, amount:currentPlantSaved.amount + 1}
            ])
        }else{
            props.updateCart([...props.cart, { name, price, amount: 1 }])
        }
    }   
    return(
        <div className="lmj-shopping-list">
            <ul>
                {categories.map((category:string) =>(
                    <li key={category}>{category}</li>
                ))}
            </ul>
            <ul role="dialog" className="lmj-plant-list">
                {plantList.map((plant) =>(
                    <div key={plant.id}>
                        <PlantItem 
                            name={plant.name} 
                            cover={plant.cover} 
                            light={plant.light} 
                            water={plant.water} 
                            price={plant.price}
                        />
                        <button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}
export default ShoppingList