<script>
    import {onMount} from "svelte";
    import AudioPlayer from "$lib/AudioPlayer.svelte";

    let slideOn = false;
    let showHiasanBtn = false
    let player
    let dear = null
    let dear2 = null

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

    function getParamsTo() {
        const url = new URL(window.location.href)
        const params = new URLSearchParams(url.search)
        dear = params.get("dear")
        dear2 = params.get("dear2")
    }

    onMount(getParamsTo)

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
            <div style="margin-bottom: 1rem; text-align: center">
                Kepada Yth:
                <br/>
                Bapak/Ibu/Saudara/i
                {#if dear}
                    <div>
                        <div class="to-name">{dear}</div>
                    </div>
                {/if}
                {#if dear !== null && dear2 !== null}
                    <div>&</div>
                {/if}
                {#if dear2}
                    <div>
                        <div class="to-name">{dear2}</div>
                    </div>
                {/if}

            </div>
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
        top: 15%; /* Posisi vertikal di tengah parent */
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
        letter-spacing: 1px;
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

    .to-dear {
        font-family: Cinzel, sans-serif;
        font-style: initial;
        text-transform: capitalize;
        text-align: center;
    }

    .to-name {
        letter-spacing: 1px;
        text-transform: capitalize;
        margin-top: 0.2rem;
        font-weight: bold;
    }
</style>