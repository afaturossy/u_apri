const key = "KEY_NAMA"

export function getNamaLS() {
    return localStorage.getItem(key)
}

export function setNamaLS(nama) {
    localStorage.setItem(key, nama)
}

