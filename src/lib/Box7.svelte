<script>
    // // observe class untuk animasi

    import {onMount} from "svelte";

    let observer
    let el_1
    let el_2
    let el_3
    let el_4
    let el_5
    let el_6

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
    })


</script>

<div class="cont">
    <div bind:this={el_1} class="title before">Love Story</div>
    <div bind:this={el_2} class="puisi before">
        <p>Tatkala gelap adalah rona utama sang angkasa, mentari hadir menjiwai bintang dengan siraman cahaya.</p>
        <p>Pun ketika hidup tak pernah berhenti menghadirkan tanda tanya, kau hadir dengan cinta dan keyakinan tuk jadi
            teman hidup selamanya.</p>
    </div>
    <div class="container-cerita">


        <!--    pertemuan-->
        <div style="display: flex; justify-content: center; margin-top: 2rem">
            <div class="cont-capsule">
                <img style="height: 34rem" src="/asset_apri/bg_1.jpeg" class="bg" alt="bg">
                <div class="c-text">
                    <div bind:this={el_3} class="pertemuan before">
                        <div>
                            Pertemuan
                        </div>
                        <p>
                            Tidak ada yang kebetulan di dunia ini, semua sudah tersusun rapi oleh sang maha kuasa, kita
                            tidak
                            bisa memilih kepada siapa akan jatuh cinta
                        </p>
                        <p>Kami bertemu pada tahun 2020, tepatnya saat kami sedang menempuh pelatihan di tempat kerja
                            yang
                            sama, tidak ada yang perna menyangka bahwa pertemuan ini membawa kami pada suatu ikatan
                            cinta
                            yang suci hari ini</p>
                    </div>
                </div>
            </div>
        </div>
        <!--    -->
        <!--    pendekatan -->
        <div class="b-pendekatan" style="display: flex; justify-content: center ; margin-top: 2rem">
            <div class="cont-capsule">
                <img style="height: 26rem" src="/asset_apri/bg_1.jpeg" class="bg" alt="bg">
                <div class="c-text">
                    <div bind:this={el_4} class="pertemuan before">
                        <div>
                            Pendekatan
                        </div>
                        <p>
                            Katanya cinta dapat tumbuh dengan kebersamaan, seiring berjalanya waktu kami semakin
                            dekat,berada di lingkungan kerja yang sama membuat kami cukup
                            sering bertemu, diantara kami tapi alam seakan terus berkonspirasi untuk menyatukan kami
                            berdua
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!--    -->
        <!--    pendekatan -->
        <div class="b-pendekatan" style="display: flex; justify-content: center ; margin-top: 2rem">
            <div class="cont-capsule">
                <img style="height: 25rem" src="/asset_apri/bg_1.jpeg" class="bg" alt="bg">
                <div class="c-text">
                    <div bind:this={el_5} class="pertemuan before">
                        <div>
                            Lamaran
                        </div>
                        <p>
                            Kehendak-Nya menuntun kami pada sebuah pertemuan yang tak perna di sangka, hingga akhirnya
                            membawa kami pada sebuah ikatan suci yang di cintai-Nya, kami melasungkan lamaran di bulan
                            Oktober 2023 lalu
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!--    -->

        <!--    pendekatan -->
        <div class="b-pendekatan" style="display: flex; justify-content: center ; margin-top: 2rem">
            <div class="cont-capsule">
                <img style="height: 33rem; margin-bottom: 4rem" src="/asset_apri/bg_1.jpeg" class="bg" alt="bg">
                <div class="c-text">
                    <div bind:this={el_6} class="pertemuan before">
                        <div>
                            Menikah
                        </div>
                        <p>
                            Percayalah, bukan karena bertemu lalu berjodoh tapi karena berjodohlah kami dipertemukan,
                            kami
                            memutuskan untuk mengikrarkan janji suci pernikahan kami dibulan Februari 2024 ini insya
                            Allah
                            sebagaimana yang pernah di katakan oleh sayyidina Ali Bin Abi Thalib "Apa yang menjadi
                            takdirmu
                            akan menemukan jalannya menemukanmu"
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!--    -->
    </div>
</div>

<style>
    .cont {
        background-color: #efebe2;
        /*height: calc(95vh - 16px);*/
        display: flex;
        flex-direction: column;
        border-radius: 0.5rem;
    }

    .title {
        font-size: xx-large;
        font-family: 'Playfair Display', serif;
        text-align: center;
        padding-top: 5vh;
        font-style: italic;
        color: #4f3434;
    }

    .puisi {
        font-family: "Playfair Display", serif;
        font-style: italic;
        font-size: small;
        text-align: center;
        padding: 0 2rem;
        color: #4f3434;
    }

    .container-cerita {
        display: grid;
        grid-template-columns: 1fr;
    }

    .cont-capsule {
        position: relative;
        display: flex;
        justify-content: center;

    }

    .bg {
        width: 80%;
        object-fit: cover;
        border-radius: 150px;
        box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.3);
        border: 10px double #926962;
        opacity: .7;
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
        color: #72482a;
    }

    .pertemuan {
        padding: 0 2.2rem;
        font-family: serif;
        letter-spacing: 1px;
        text-align: center;
        line-height: 1.7rem;
        font-size: small;
    }

    .pertemuan div {
        color: #4f3434;
        font-size: xx-large;
        /*font-family: "Cinzel", serif;*/
        font-style: italic;
        font-family: 'Playfair Display', serif;
        margin-bottom: 2rem;
    }

    .pertemuan p {
        text-align: center;
        padding: 0 0.5rem;
        font-style: italic;
        font-family: 'Playfair Display', serif;
    }

    /* Untuk layar tablet dan PC (lebar lebih dari 768px) */
    @media (min-width: 768px) {
        .container-cerita {
            grid-template-columns: 1fr 1fr; /* Dua kolom untuk layar tablet dan PC */
        }
    }
</style>