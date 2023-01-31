import { useSelector } from "react-redux";
import FlowersView from "../../features/flowers/FlowersView";
export default function Flowers() {
    const noOfFlowers = useSelector((state)=>state.flowers.numOfFlowers);
    console.log('no of flowers', noOfFlowers);
    
    return(
        <> 
        {/* <h3> Number of Flowers : {(noOfFlowers<order) ? 'Out of stock' : noOfFlowers}</h3> */}
        <FlowersView/>
        
        
        </>
    )
}