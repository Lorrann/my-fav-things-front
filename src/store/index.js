import Vuex from "vuex";

export default function getStore() 
{
    return new Vuex.Store({
        state: {
        appName: 'My Fav Things'
        }
    })    
}    