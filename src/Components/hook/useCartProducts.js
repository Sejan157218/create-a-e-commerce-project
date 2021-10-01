
import { useEffect, useState } from 'react';

const useCartproduct = ()=>{
    const [cartProduct,setCartProduct] = useState([]);
    useEffect(()=>{
        fetch('./FakeData.json')
        .then(res=>res.json())
        .then(data=>setCartProduct(data))
    },[]);
    return [cartProduct];
    
}


export default useCartproduct;


