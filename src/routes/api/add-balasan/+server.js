import {addBalasan, addHadir, getHadir} from "$lib/method/acces-api-database.js";

export async function GET({url}) {
    const id = url.searchParams.get("id")
    const nama = url.searchParams.get("nama")
    const balasan = url.searchParams.get("balasan")

    await addBalasan(id, nama, balasan)
    return new Response(JSON.stringify({id, nama, balasan}))
}
