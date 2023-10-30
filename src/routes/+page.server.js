import {getHadir, getPesan} from "$lib/method/acces-api-database.js";

export async function load() {
    const pesan = await getPesan()

    return {
        pesan: pesan.reverse()
    }
}