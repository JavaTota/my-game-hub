import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{    
        key: "86f2ec9b42fe462189f16ff32eb1d0c8"
    }
})