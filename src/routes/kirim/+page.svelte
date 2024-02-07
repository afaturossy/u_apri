<script>
    let value = ""
    let value2 = ""

    function handleOk() {
        let ke = encodeURIComponent(value).trim()
        let ke2 = encodeURIComponent(value2).trim()
        let url = ""
        if (ke.length > 0) {
            url = `/?dear=${ke}`

        }
        if (ke2.length > 0) {
            url += `&dear2=${ke2}`
        }

        if(url.length > 0){
            window.open(url, "_self")
        }else{
            alert("isi salah DEAR nya dong")
        }
    }
</script>

<div>
    <h2 style="text-align: center; margin-bottom: 1rem; color: white; font-family: sans-serif">Helper URL
        Undangan</h2>
    <div class="center">
        <input bind:value={value} placeholder="dear 1" style="text-align: center; font-weight: bold">
    </div>
    <div class="center" style="color: white">&</div>
    <div class="center">
        <input bind:value={value2} placeholder="dear 2" style="text-align: center; font-weight: bold">
    </div>
    <div class="center">
        <button on:click={handleOk} style="font-size: large">ok</button>
    </div>

    <div style="margin-top: 5rem; color: white; font-size: small" class="center">
        * isi dear 1 saja jika hanya untuk 1 orang penerima
        <br>
        * coba sendiri aja gak dosa
    </div>

</div>

<style>
    .center {
        display: flex;
        justify-content: center;
        font-size: large;
        margin-top: 0.4rem;
    }
</style>