import { ICareScale } from "../../interface/ICareScale"
import sun from "../../assets/sun.svg"
import water from "../../assets/water.svg"
function CareScale(props:ICareScale){
    
    const scaleValue = props.scaleValue
    const scaleType = props.careType === 'light' ? <img src={sun} alt="sun-icon"/> : <img src={water} alt="water-icon"/>
    const range = [1,2,3]

    function handleClick(event: any){
        event.preventDefault()
        alert(`Cette plante requiert ${(props.scaleValue === 1 && "peu") || (props.scaleValue === 2 && "modérement") || (props.scaleValue === 3 && "beaucoup")} ${props.careType === "light" ? "de lumière" : "d'arrosage"}`)
    }
    
    return (
    <div onClick={handleClick}>
        {range.map((rangeElem) =>
            scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
        )}
    </div>)
}

export default CareScale