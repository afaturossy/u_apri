const host = "http://78.128.127.47:4002"

async function getHadir() {
    try {
        const url = host + "/get-hadir"
        const res = await fetch(url)
        return await res.json()
    } catch (e) {
        console.log(e)
        return []
    }
}


async function getPesan() {
    try {
        const url = host + "/get-pesan"
        const res = await fetch(url)
        return await res.json()
    } catch (e) {
        console.log(e)
        return []
    }
}

async function addHadir(nama, hadir, jumlah) {
    try {
        const url = host + "/add-hadir?nama=" + nama + "&hadir=" + hadir.toString() + "&jumlah=" + jumlah
        await fetch(url)
    } catch (e) {
        console.log(e)
    }
}

async function addPesan(nama, pesan) {
    try {
        const url = host + "/add-pesan?nama=" + nama + "&pesan=" + pesan
        await fetch(url)
    } catch (e) {
        console.log(e)
    }
}

async function addBalasan(id, nama, pesan) {
    try {
        const url = host + "/add-balasan?id=" + id + "&nama=" + nama + "&balasan=" + pesan
        await fetch(url)
    } catch (e) {
        console.log(e)
    }
}

export {
    getHadir,
    addHadir,
    getPesan,
    addPesan,
    addBalasan
}