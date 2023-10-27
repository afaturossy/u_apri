<script>
    import BoxDisplayUcapanNoReply from "$lib/BoxDisplayUcapanNoReply.svelte";
    import AddUcapanBox from "$lib/AddUcapanBox.svelte";

    let showBalasan = true
    let showAddBalas = false
</script>

<div class="box-display">
    <div class="name">Arek Turu</div>
    <div class="comment">selamat ya</div>
    <div class="cont-btn-reply">
        <img class="btn-reply-icon" src="/asset_apri/reply-icon.webp" alt="btn-reply">
        <button on:click={()=>{showAddBalas = !showAddBalas}} class="btn-reply">Reply</button>
        <img on:click={()=>showBalasan = !showBalasan} style={showBalasan?"":"rotate:-90deg"} class="btn-arrow-icon"
             src="/asset_apri/arrow-down.svg" alt="hiasan-btn">

    </div>
    <div style="margin-left: 1rem; border-left: 1px solid #c2c1c1">
        {#if showBalasan}
            <BoxDisplayUcapanNoReply/>
            <BoxDisplayUcapanNoReply/>
        {/if}
    </div>
    <div style="margin-top: 1rem; margin-left: 1rem">
        {#if showAddBalas}
            <AddUcapanBox/>
        {/if}
    </div>
</div>

<style>
    .box-display {
        margin: 1rem 0.5rem;
    }

    .box-display .name {
        font-weight: bold;
        font-family: "Playfair Display", sans-serif;

    }

    .box-display .comment {
        color: #888;
        margin-top: 0.5rem;
    }

    .cont-btn-reply {
        display: flex;
        margin-top: 0.5rem;
    }

    .btn-reply {
        background-color: transparent;
        border: 0;
        color: #999;
    }

    .btn-reply-icon {
        width: 1.5rem;
        rotate: 180deg;
        opacity: 0.3;
    }

    .btn-arrow-icon {
        width: 1.5rem;
        opacity: 0.3;
        margin-left: 3rem;
    }
</style>