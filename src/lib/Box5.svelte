<script>
    import {onMount, tick} from "svelte";

    // Mengatur target time pada 18 Februari 2024 pukul 09:00
    let targetTime = new Date(2024, 1, 18, 9, 0, 0).getTime(); // Tanggal pada bulan dimulai dari 0 (Januari adalah 0)


    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    const updateCountdown = () => {
        const currentTime = new Date().getTime();
        const timeLeft = targetTime - currentTime;

        days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    };

    onMount(updateCountdown);

    // Perbarui countdown setiap 1 detik
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Perbarui countdown saat tick berubah
    tick().then(updateCountdown);


    //----- UNTUK ANIMASI -----//

    // // observe class untuk animasi

    let observer
    let el_1
    let el_2
    let el_3
    let el_4

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("before");
                entry.target.classList.add("anim-scale");
            }
        });
    }

    onMount(() => {
        observer = new IntersectionObserver(handleIntersection, {
            root: null, // Tidak ada elemen root yang diatur (viewport utama)
            rootMargin: "0px", // Margin diatur ke 0px
            threshold: 0.5 // Dipantau saat setengah elemen terlihat
        });

        observer.observe(el_1)
        observer.observe(el_2)
        observer.observe(el_3)
        observer.observe(el_4)
    })


</script>

<div class="cont">
    <div style="position: relative">
        <img class="bg" src="/asset_apri/bg_2.jpg" alt="bg">

        <div class="content">
            <div class="title">Countdown & Timer</div>
            <div class="cont-timer">
                <div bind:this={el_1} class="day-box before">
                    <div class="angka">{days}</div>
                    <div class="label">Day</div>
                </div>

                <div bind:this={el_2} class="day-box before">
                    <div class="angka">{hours}</div>
                    <div class="label">Hrs</div>
                </div>
                <div bind:this={el_3} class="day-box before">
                    <div class="angka">{minutes}</div>
                    <div class="label">Min</div>
                </div>
                <div bind:this={el_4} class="day-box before">
                    <div class="angka">{seconds}</div>
                    <div class="label">Sec</div>
                </div>
            </div>
        </div>
    </div>

</div>

<style>
    .cont {
        background-color: #efebe2;
        /*height: calc(100vh - 16px);*/
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 0.5rem;
    }

    .bg {
        height: 20rem;
        width: 100%;
        object-fit: cover;
        object-position: center bottom;
        opacity: 0.7;
        border-radius: 1.5rem;
    }

    .content {
        margin-top: 3rem;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .title {
        color: #6b5a4c;
        font-size: xx-large;
        width: 100%;
        font-family: "Playfair Display", serif;
        font-style: italic;
        text-align: center;
        margin-top: 2rem;
    }

    .cont-timer {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 4rem;
    }

    .day-box {
        background-color: #4f3434;
        color: white;
        padding: 0.1rem 0.7rem;
        border-radius: 0.5rem;
        width: 2rem;
    }

    .angka {
        font-size: large;
        margin-top: 0.5rem;
        text-align: center;
        letter-spacing: 2px;
        opacity: 0.5;
        font-family: sans-serif;
    }

    .label {
        font-size: x-small;
        text-align: center;
        margin-top: 0.5rem;
        margin-bottom: 0.2rem;
        opacity: 0.3;
        font-family: sans-serif;
    }
</style>