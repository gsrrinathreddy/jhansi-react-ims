import CakeView from '../../features/cake/cakeView';
import { useSelector } from 'react-redux';

export default function Cakes() {
     const noOfCakes = useSelector((state)=>state.cake.numOfCakes);
     console.log('no of cakes', noOfCakes);
     
   
    return(
        <> 
            {/* <h3>Number of Cakes: {(noOfCakes<order) ? 'Out of stock' : noOfCakes } </h3> */}
         
            <CakeView/>            
        
        </>
    )
}