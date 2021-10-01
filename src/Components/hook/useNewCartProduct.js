import { useEffect, useState } from "react";
import { getData } from "../../LocalHostData";

const useNewCartProduct = cartProduct=>{
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        if(cartProduct.length){
            const data = getData();
            const saveData = [];
            for(const productid in data){
                const productCart=cartProduct.find(product=>product.id==productid)
                const quantity = data[productid];
                productCart.quantity = quantity;
                saveData.push(productCart);
            }
            setProducts(saveData) 
        }
    },[cartProduct]);
    return [products,setProducts]
}

export default useNewCartProduct;
