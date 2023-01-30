import CakeView from '../../features/cake/cakeView';
import CartComponent from '../../components/CartComponent';
import { useDispatch, useSelector } from 'react-redux';
import IMSCake from '../../components/IMSCard';

export default function Cakes() {
     const noOfCakes = useSelector((state)=>state.cake.numOfCakes);
     console.log('no of cakes', noOfCakes);
     const order=1;
   
    return(
        <> 
            {/* <h3>Number of Cakes: {(noOfCakes<order) ? 'Out of stock' : noOfCakes } </h3> */}
         
            <CakeView/>            
        
        </>
    )
}