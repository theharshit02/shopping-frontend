import axios from "axios";

async function showall(queries,sort){ 
    const value = queries.value.toString()
    const result = await axios.get(`https://shopping-backend-njuz.onrender.com/api/home/showAll?brand=${queries.brand}&category=${queries.category}&color=${queries.color}&search=${queries.search}&shipping=${queries.shipping}&value=${value}&sort=${sort}`)
    return result
}

async function listCategories(){
    const result = await axios.get("https://shopping-backend-njuz.onrender.com/api/home/getCategory")
    return result
}

async function listBrands(){
    const result = await axios.get("https://shopping-backend-njuz.onrender.com/api/home/getBrand")
    return result
}

async function listColor(){
    const result = await axios.get("https://shopping-backend-njuz.onrender.com/api/home/getColor")
    return result
}

async function details(id){
    const result = await axios.get(`https://shopping-backend-njuz.onrender.com/api/home/details/${id}`)
    return result
}

export {showall, listCategories, listBrands, listColor, details}