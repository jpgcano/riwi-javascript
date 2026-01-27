import { authServices } from "../core/AuthService";
import {fetchMeteo} from "../services/open-meteo.js";
import { WeatherReport } from "../models/WeatherReport.js";

export async function router() {
    const hash = location.hash || "#/login";
    const currenRouter = hash.split("/")[1] || 'login';

    //Guardia, usamos el método de nuestrae clase 
    if (currenRouter === 'dashboard' && !authServices.isAuthenticated()){
        window.location.hash="#/login";
        return;
    }
    switch (currenRouter){
        case 'dashboard':
            return
    case 'login':
        return
    }
}