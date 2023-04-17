import { plantList} from "../../data/plantList"
import ICategoryState from "../../interface/ICategoryState";
import { IplantList } from "../../interface/IPlantList";
import "./Categories.css"


function Categories(props:ICategoryState){
    
    const categories = plantList.reduce((acc:any, plant: IplantList) =>
        acc.includes(plant.category) ? acc : [...acc, plant.category], []
    )

    function handleChange(event:any){
        console.log(props.category)
        props.updateCategory(event.target.value)
    }

    
    return(
        <div className="lmj-categories">
            <select onChange={handleChange} className="lmj-categories-select" value={props.category}>
                {categories.map((category:string) =>(
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
            <button onClick={() => props.updateCategory("")}>Réinitialiser</button>
        </div>
    )
}

export default Categories