import {addPesan, getPesan} from "$lib/method/acces-api-database.js";

export async function GET() {
    let data = await getPesan()
    return new Response(JSON.stringify(data))
}
