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
    if(id in data && data[id]>0){
        data[id] -=1
    }
    savedToData(data)
}

const deleteData= id => {
    const DeleteData = getData();
    delete DeleteData[id];
    savedToData(DeleteData)
}

const savedToData = data=>{
    localStorage.setItem('Shopping-cart',JSON.stringify(data))
}

const getData=()=>{
    let data = localStorage.getItem('Shopping-cart');
    return data ? JSON.parse(data) : {};
}

export {addToData,removeToData,getData,deleteData}