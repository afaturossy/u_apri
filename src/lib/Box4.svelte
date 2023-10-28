<script>
    import {onMount} from "svelte";

    let observer
    let el_1
    let el_2
    let el_3
    let el_4
    let el_5
    let el_6
    let el_7

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
        observer.observe(el_5)
        observer.observe(el_6)
        observer.observe(el_7)
    })


</script>

<div class="cont">
    <div class="c_left">
        <img class="bg" src="/asset_apri/bg_1.jpeg" alt="bg">
        <div class="c-text">
            <div style="text-align: center">
                <div bind:this={el_1} class="heading-first before">AKAD NIKAH</div>
                <p bind:this={el_2} class="before">Minggu, 18 Februari 2024
                    <br/>
                    Pukul 09.00 WIB
                </p>

                <div bind:this={el_3} class="heading before">RESEPSI</div>
                <p bind:this={el_4} class="before">Minggu, 18 Februari 2024
                    <br/>
                    Pukul 10.00 - 15.00 WIB
                </p>

                <div bind:this={el_5} class="heading before">LOKASI</div>
                <p bind:this={el_6} class="before">
                    Balai Warga RW 007 Medang Lestari, Pagedangan, Tangerang, Banten
                </p>
                <br/>
                <br/>
                <div bind:this={el_7} class="before">
                    <a href="https://maps.app.goo.gl/3vxPRFwZdcJGnYZP9" class="btn-map">VIEW MAP</a>
                </div>
            </div>
        </div>
    </div>

</div>

<style>
    .cont {
        background-color: #efebe2;
        height: 40rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 0.5rem;

    }

    .c_left {
        margin: 2rem;
        position: relative;
        height: 40rem;
    }

    .bg {
        height: 35rem;
        width: calc(100vw - 6rem);
        object-fit: cover;
        border-radius: 150px 150px 15px 15px;
        box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.3);
        border: 10px double #926962;
        opacity: .6;
    }

    .c-text {
        position: absolute;
        display: flex;
        justify-content: center;
        padding-top: 5rem;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        /*font-family: serif;*/
        font-style: italic;
        font-family: 'Playfair Display', serif;
        color: #6b5a4c;
    }

    .heading {
        font-size: x-large;
        text-align: center;
        /*font-family: 'Old Standard TT', serif;*/
        font-style: italic;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        margin-top: 3rem;
    }

    .heading-first {
        font-size: x-large;
        text-align: center;
        /*font-family: 'Old Standard TT', serif;*/
        font-style: italic;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
    }

    .btn-map {
        background-color: #926962;
        padding: 0.5rem 1rem;
        border-radius: 0.3rem;
        color: white;
        /*font-family: 'ABeeZee', sans-serif;*/
        font-style: italic;
        font-family: 'Playfair Display', serif;
        text-decoration: none;
        box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.3);
    }

    .btn-map:active {
        background-color: #4f3434;
    }

</style>