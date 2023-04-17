import { plantList} from "../../data/plantList"
import PlantItem from "../PlantItem/PlantItem";
import './ShoppingList.css';
import { useState } from "react";
import Categories from "../Categories/Categories";
import { ICartState } from "../../interface/ICartState";
function ShoppingList(props:ICartState){

    const [category, updateCategory] = useState("")
    
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
            <Categories category={category} updateCategory={updateCategory}/>
            <ul role="dialog" className="lmj-plant-list">
                {category === "" ? 
                    plantList.map((plant) =>(
                        <div key={plant.id}>
                            <PlantItem 
                                name={plant.name} 
                                cover={plant.cover} 
                                light={plant.light} 
                                water={plant.water} 
                                price={plant.price}
                            />
                            <button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
                        </div>))
                    : plantList.map((plant)=>(
                        plant.category === category ? 
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
                    : ""
                    ))
                    }
            </ul>
        </div>
    )
}
export default ShoppingList