import axios from "axios";

async function showall(){
    const result = await axios.get("http://localhost:3000/api/home/showAll")
    return result
}

export {showall}