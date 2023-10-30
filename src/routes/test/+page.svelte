<script>
    export let data
    console.log(data)

    async function reloadPesan() {
        const res = await fetch("/api/get-pesan")
        data.pesan = await res.json()
    }

</script>


<div>
    test
</div>
