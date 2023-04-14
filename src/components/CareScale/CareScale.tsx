import { ICareScaleProps } from "../../interface/ICareScaleProps"
function CareScale(props:ICareScaleProps){
    
    const scaleValue = props.scaleValue
    const scaleType = props.careType === 'light' ? '☀️' : '💧'
    const range = [1,2,3]
    
    return (
    <div>
        {range.map((rangeElem) =>
            scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
        )}
    </div>)
}

export default CareScale