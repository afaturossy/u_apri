import {addHadir} from "$lib/method/acces-api-database.js";

export async function GET({url}) {
    const nama = url.searchParams.get("nama")
    const hadir = url.searchParams.get("hadir")
    const jumlah = url.searchParams.get("jumlah")

    await addHadir(nama, hadir, jumlah)
    return new Response(JSON.stringify({nama, hadir, jumlah}))
}
