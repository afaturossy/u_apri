<script>
    import Nama2Calon from "$lib/Nama2Calon.svelte";
</script>

<div class="cont">
    <div class="c_left">
        <img class="bg" src="/asset_apri/bg_1.jpeg" alt="bg">
        <div class="c-text">
            <p class="ayat anim-lmovescale">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
            <p class="arti anim-rmovescale">
                “Dan diantara tanda-tanda kekuasaan-Nya ialah diciptakan Nya untukmu pasangan hidup dari jenismu sendiri
                supaya kamu mendapat ketenangan hati dan dijadikan-Nya kasih sayang diantara kamu. Sesungguhnya yang
                demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang berfikir.”
            </p>
            <p class="surah">( Ar-Rum: 21 )</p>
        </div>
    </div>

</div>

<style>
    .cont {
        background-color: #efebe2;
        height: 45rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 0.5rem;

    }

    .c_left {

        margin: 2rem;
        position: relative;
        height: 30rem;

    }

    .bg {
        height: 38rem;
        width: calc(95vw - 6rem);
        object-fit: cover;
        border-radius: 150px 150px 15px 15px;
        box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.3);
        border: 10px double #926962;
    }

    .c-text {
        position: absolute;
        padding-top: 5rem;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

    }


    .ayat {
        font-size: x-large;
        text-align: center;
    }

    .arti {
        font-size: medium;
        margin-top: 2rem;
        line-height: 1.8rem;
        padding-bottom: 1rem;
        padding-left: 0.5rem;
        padding-right: 1.2rem;
        text-align: justify;
        font-style: italic;
        font-family: 'Playfair Display', serif;
    }

    .surah{
        text-align: center;
        font-size: medium;
        color: #6b5a4c;
        font-style: italic;
        font-family: 'Playfair Display', serif;
    }

    /* Media query untuk perangkat seluler (contoh: lebar maksimum 768px) */
    @media (max-width: 768px) {
        .c-text {
            padding-left: 1rem; /* Padding kiri untuk hp */
            padding-right: 1rem; /* Padding kanan untuk hp */
        }
    }

    /* Media query untuk PC (contoh: lebar minimum 769px) */
    @media (min-width: 769px) {
        .c-text {
            padding-left: 10rem; /* Padding kiri untuk PC */
            padding-right: 10rem; /* Padding kanan untuk PC */

        }

        .ayat {
            font-size: xx-large;
        }
        .arti{
            font-size: large;
            margin-top: 5rem;
        }
    }
</style>