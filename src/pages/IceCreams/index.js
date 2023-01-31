import IcecreamView from "../../features/icecream/IcecreamView";
import { useSelector } from "react-redux";
export default function IceCreams() {
    const noOfIcecream = useSelector((state)=>state.icecream.numOfIcecream);
    console.log('no of icecreams', noOfIcecream);
    
    return(
        <> 
        {/* <h3>Number of IceCreams : {(noOfIcecream<order) ? 'Out of stock' : noOfIcecream}</h3> */}
        <IcecreamView/>
        </>
    )
}