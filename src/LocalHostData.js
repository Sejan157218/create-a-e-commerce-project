const  addToData = id=>{
    const  products = getData();
    if(id in products){
        products[id] +=1
    }
    else{
        products[id] = 1
    }
    savedToData(products);
}

const removeToData = id=>{
    const data = getData();
    if(id in data && data[id]>1){
        data[id] -=1
    }
    else{
        delete data[id];
    }
    savedToData(data)
}


const savedToData = data=>{
    localStorage.setItem('Shopping-cart',JSON.stringify(data))
}

const getData=()=>{
    let data = localStorage.getItem('Shopping-cart');
    return data ? JSON.parse(data) : {};
}

export {addToData,removeToData,getData}