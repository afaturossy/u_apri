import {addPesan} from "$lib/method/acces-api-database.js";

export async function GET({url}) {
    const nama = url.searchParams.get("nama")
    const pesan = url.searchParams.get("pesan")

    await addPesan(nama, pesan)
    return new Response(JSON.stringify({nama, pesan}))
}
