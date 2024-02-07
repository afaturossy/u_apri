<script>
    let value = ""

    function handleOk() {
        console.log(value)
        let ke = encodeURIComponent(value)
        let url = `/?dear=${ke}`
        console.log(url)
        window.open(url)
    }
</script>

<div>
    <h2 style="text-align: center; margin-bottom: 1rem; color: white; font-family: sans-serif">Helper URL
        Undangan</h2>
    <div style="display: flex; justify-content: center ; font-size: large">
        <input bind:value placeholder="dear" style="text-align: center">
        <button on:click={handleOk}>ok</button>
    </div>
</div>

<style>

</style>