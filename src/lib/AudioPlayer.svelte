<script>
    export function play(){
        player.play()
    }

    function restartAudio() {
        player.currentTime = 0; // Mengatur ulang waktu audio ke awal
        player.play(); // Memutar audio
    }
    function handleAudioEnded() {
        restartAudio();
    }

    let player;
</script>

<div>
    <audio bind:this={player} on:ended={handleAudioEnded}>
        <source src="/asset_apri/lagu2.mp3" type="audio/mpeg">
    </audio>
</div>