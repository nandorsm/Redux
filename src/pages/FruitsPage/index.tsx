import { useSelector } from "react-redux"

interface IFruits {
    fruits: string[]
}

const FruitsPage = () => {
    
    const fruits = useSelector((state: IFruits) => state.fruits)
    
    return(
        <div>
            {fruits.map((fruit) => (
                <p key={fruit}>{fruit}</p>
            ))}
        </div>
    );
}

export default  FruitsPage