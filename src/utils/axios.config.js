import axios from "axios";

let URL;
switch (process.env.REACT_APP_ENVIRONMENT) {
    case 'DEVELOPMENT':
        URL = "http://localhost:5000/api/v1";
        break;
    case "PRODUCTION":
        URL = "http://server.redux.vercel.app/api/v1"
        break;
    default:
        URL = "http://localhost:5000/api/v1";
}

const instance = axios.create({
    baseURL: URL
})

export default instance