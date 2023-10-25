<script>
    import Nama2Calon from "$lib/Nama2Calon.svelte";
</script>

<div class="cont">
    <div class="c_left">
        <img class="bg" src="/asset_apri/bg_1.jpeg" alt="bg">
        <div class="c-text">
            <div style="text-align: center">
                <div class="heading-first">AKAD NIKAH</div>
                <p>Minggu, 18 Februari 2024
                    <br/>
                    Pukul 09.00 WIB
                </p>

                <div class="heading">RESEPSI</div>
                <p>Minggu, 18 Februari 2024
                    <br/>
                    Pukul 10.00 - 15.00 WIB
                </p>

                <div class="heading">LOKASI</div>
                <p>
                    Balai Warga RW 007 Medang Lestari, Pagedangan, Tangerang, Banten
                </p>
                <button class="btn-map">VIEW MAP</button>
            </div>
        </div>
    </div>

</div>

<style>
    .cont {
        background-color: #efebe2;
        height: calc(100vh - 16px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 0.5rem;
    }

    .c_left {

        margin: 2rem;
        position: relative;
        height: 70vh;

    }

    .bg {
        height: 80vh;
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
        font-family: serif;
        color: #6b5a4c;
    }

    .heading {
        font-size: x-large;
        text-align: center;
        font-family: 'Old Standard TT', serif;
        font-weight: bold;
        margin-top: 3rem;
    }

    .heading-first {
        font-size: x-large;
        text-align: center;
        font-family: 'Old Standard TT', serif;
        font-weight: bold;
    }

    .btn-map {
        background-color: #926962;
        padding: 0.5rem 1rem;
        border-radius: 0.3rem;
        color: white;
        font-family: 'ABeeZee', sans-serif;
    }

</style>