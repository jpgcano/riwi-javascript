// importaciones
import {store} from "../state/store.js"

export class AuthServices {
    constructor (){
//Inicializar recuperando del localStorage
        this.user = JSON.parse(localStorage.getItem(`user`) || null);
    }

    login(email,password){
        // buscar usuario en la base e datos 
        const founduser =  store.users.find( u => u.email === email && u.password === password);

        if (founduser)
        {
            this.user = founduser;
            localStorage.setItem('user', JSON.stringify(founduser));
            return true
        }
        return false
    }
    logout(){
        this.user=null;
        localStorage.removeItem('user');
        window.location.hash ='#/login';
    }
    isAuthenticated(){
        return !!this.user; // devuelve True o False   si hay un usuario o no 
    }

}

export const authServices =  AuthServices();