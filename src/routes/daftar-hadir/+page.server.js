import {getHadir} from "$lib/method/acces-api-database.js";

export function load(){
    return {
        data:"kopi",
        hadir: getHadir()
    }
}