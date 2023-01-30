import { useSelector } from "react-redux";
import ChocolateView from "../../features/chocolates/ChocolateView/index";
export default function Chocolates() {
    const noOfChocolates = useSelector((state)=>state.chocolates.numOfChocolates);
    console.log('no of chocolates', noOfChocolates);
    const order=1;
    return(
        <> 
        {/* <h3> Number of Chocolates : {(noOfChocolates<order) ? 'Out of stock' : noOfChocolates } </h3> */}
        <ChocolateView/>
        
        </>
    )
}