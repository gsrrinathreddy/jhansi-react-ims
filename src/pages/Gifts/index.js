import { useSelector } from "react-redux";
import GiftView from "../../features/gifts/GiftView/index";
export default function Gifts() {
    const noOfGifts = useSelector((state)=>state.gifts.numOfGifts);
    console.log('no of gifts', noOfGifts);
     const order=1;
    return(
        <> 
        {/* <h3> Number of Gifts : {(noOfGifts<order) ? 'Out of stock' : noOfGifts} </h3> */}
        <GiftView/>
        
        
        </>
    )
}