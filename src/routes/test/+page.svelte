<script>

    let player;
    function play(){
        player.play()
    }
</script>

<div>
    <audio bind:this={player}>
        <source src="/asset_apri/lagu2.mp3" type="audio/mpeg">
    </audio>
    <button on:click={play}>play</button>
</div>