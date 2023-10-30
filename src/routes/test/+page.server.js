import {getHadir, getPesan} from "$lib/method/acces-api-database.js";

export function load(){

    return {
        hadir : getHadir(),
        pesan : getPesan()
    }
}