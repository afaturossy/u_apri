<script>
    import {onMount} from "svelte";
    import AudioPlayer from "$lib/AudioPlayer.svelte";

    let slideOn = false;
    let showHiasanBtn = false
    let player

    function setSlideOn() {
        player.play()
        slideOn = true
        unlockScroll()
    }

    function setShowHiasanBtn(value) {
        showHiasanBtn = value
    }

    onMount(() => {
        // Scroll ke paling atas (0, 0)
        window.scrollTo(0, 0);

        lockScroll()
    })

    function lockScroll() {
        // Simpan posisi scroll saat ini
        const scrollY = window.scrollY;

        // Tambahkan properti CSS untuk mengunci scroll
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
    }

    function unlockScroll() {
        // Ambil nilai top yang disimpan saat scroll terkunci
        const top = document.body.style.top;

        // Hapus properti CSS untuk mengizinkan scroll lagi
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';

        // Gulirkan ke posisi sebelumnya
        window.scrollTo(0, parseInt(top || '0') * -1);
    }


</script>

<div class={`cont-fix ${slideOn?"slide-top":""}`}>
    <div class="container-cover-depan">
        <img alt="bg" class="bg-1" src="/asset_apri/bg_1.jpeg">
        <div class="efek-putih">
        </div>
        <div class="pos-tengah-atas">
            <div>The Wedding Of</div>
        </div>

        <div class="pos-tengah">
            <img class="hiasan-1" decoding="async" src="/asset_apri/Untitled-1.png" alt="unit-1">
        </div>
        <div class="pos-tengah">
            <div class="names">
                <div>Akbar</div>
                <div>&</div>
                <div>Puji</div>
            </div>
        </div>

        <div class="pos-tengah-bawah">
            <div on:mouseover={()=>showHiasanBtn = true} on:mouseleave={()=>showHiasanBtn = false} on:click={setSlideOn}
                 class="open-btn">
                Open Invitation
                {#if showHiasanBtn}
                    <img class="open-btn-hiasan" src="/asset_apri/arrow-kanan.svg" alt="hiasan-btn">
                {/if}
            </div>
        </div>
    </div>
<!--    <div class="animate">-->
<!--        <img src="/asset_apri/plane.svg" alt="plane">-->
<!--        <img src="/asset_apri/plane.svg" alt="plane">-->
<!--    </div>-->
    <AudioPlayer bind:this={player}/>
</div>


<style>
    .animate {
        display: flex;
        justify-content: center;
        gap: 2rem;
    }

    .animate img {
        width: 30vw;
    }

    .cont-fix {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 50;
    }

    .slide-top {
        animation: slide-from-bottom 1.3s ease-in-out forwards; /* Animasi berlangsung selama 1 detik */
    }

    @keyframes slide-from-bottom {
        0% {
            transform: translateY(0); /* Mulai dari posisi bawah layar */
            opacity: 1;
        }
        100% {
            transform: translateY(-100%); /* Berakhir di posisi atas layar */
            opacity: 0;
        }
    }

    .container-cover-depan {
        position: relative;
    }

    .bg-1 {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
    }

    .efek-putih {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #fff3e9;
        opacity: 0.3;
    }

    .pos-tengah {
        position: absolute;
        top: 45%; /* Posisi vertikal di tengah parent */
        left: 50%; /* Posisi horizontal di tengah parent */
        transform: translate(-50%, -50%); /* Membuat elemen tepat di tengah parent */
        font-family: 'Playfair Display', serif;
        font-style: italic;
    }

    .pos-tengah-atas {
        position: absolute;
        top: 18%; /* Posisi vertikal di tengah parent */
        left: 50%; /* Posisi horizontal di tengah parent */
        transform: translate(-50%, -50%); /* Membuat elemen tepat di tengah parent */
        font-family: 'Playfair Display', serif;
        font-style: italic;
    }

    .pos-tengah-bawah {
        position: absolute;
        top: 80%; /* Posisi vertikal di tengah parent */
        left: 50%; /* Posisi horizontal di tengah parent */
        transform: translate(-50%, -50%); /* Membuat elemen tepat di tengah parent */
        /*font-family: 'ABeeZee', sans-serif;*/
        font-family: 'Playfair Display', serif;
        font-style: italic;
    }

    .open-btn {
        background-color: #fff;
        padding: 0.3rem 1rem;
        border-radius: 2rem;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
        display: flex;
        gap: 0.5rem;
    }

    .open-btn-hiasan {
        width: 1rem;
    }

    .names {
        font-size: 1.8rem;
        text-align: center;
        color: #4f3434;
        letter-spacing: 1px;
        font-weight: bold;
        z-index: 10;
        font-style: italic;
    }

    .hiasan-1 {
        /*padding-top: 1.5rem;*/
        z-index: 1;
        animation: rotate 30s linear infinite;
        /*animation-iteration-count: 1;*/
    }

    /* Media query untuk layar HP (contoh: lebar maksimum 480px) */
    @media (max-width: 480px) {
        .hiasan-1 {
            width: 75vw;
        }
    }

    /* Media query untuk layar tablet (contoh: lebar antara 481px hingga 768px) */
    @media (min-width: 481px) and (max-width: 768px) {
        .hiasan-1 {
            width: 40vw; /* Ukuran untuk tablet */
        }
    }

    /* Media query untuk layar PC (contoh: lebar minimum 769px) */
    @media (min-width: 769px) {
        .hiasan-1 {
            width: 25vw; /* Ukuran untuk PC */
        }
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(180deg);
        }
    }
</style>