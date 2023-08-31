import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addFruit } from "../../store/modules/fruits/actions"

export interface IFruits {
    fruits: string[]
}

const FruitsPage = () => {
    
    const [fruit, setFruit] = useState("")
    const dispatch = useDispatch()
    const fruits = useSelector((state: IFruits) => state.fruits)

    const handleAddFruit = () => dispatch(addFruit(fruit))

    console.log(fruit)
    
    return(
        <div>
            <input type="text" onChange={(e) => setFruit(e.target.value)}/>
            <button onClick={handleAddFruit}>Adicionar fruta</button>
            {fruits.map((fruit) => (
                <p key={fruit}>{fruit}</p>
            ))}
        </div>
    );
}

export default  FruitsPage