<script>
    // // observe class untuk animasi

    import {onMount} from "svelte";

    let observer
    let observer2
    let el_1
    let el_2

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("before");
                entry.target.classList.add("anim-scale");
            }
        });
    }

    function handleIntersection2(entries, observer2) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("before");
                entry.target.classList.add("anim-rotate");
            }
        });
    }

    onMount(() => {
        observer = new IntersectionObserver(handleIntersection, {
            root: null, // Tidak ada elemen root yang diatur (viewport utama)
            rootMargin: "0px", // Margin diatur ke 0px
            threshold: 0.5 // Dipantau saat setengah elemen terlihat
        });

        observer2 = new IntersectionObserver(handleIntersection2, {
            root: null, // Tidak ada elemen root yang diatur (viewport utama)
            rootMargin: "0px", // Margin diatur ke 0px
            threshold: 0.5 // Dipantau saat setengah elemen terlihat
        });

        observer.observe(el_1)
        observer2.observe(el_2)
    })

    // ---- handle fetch data ke api database
    let nama
    let hadir
    let jumlah

    function submit() {
        if (nama && hadir && jumlah) {
            jumlah = parseInt(jumlah)
            fetch("/api/add-hadir?nama=" + nama + "&hadir=" +
                hadir + "&jumlah=" + jumlah
            )
            nama = null
            hadir = null
            alert("Terima kasih telah mengisi data ini")
            return
        }
        alert("masukan data dengan benar dan lengkap")
    }

</script>


<div class="cont">
    <div class="c_left">
        <img class="bg" src="/asset_apri/bg_1.jpeg" alt="bg">
        <div class="hiasan-atas">
            <img bind:this={el_2} class="before" src="/asset_apri/Untitled-3.png" style="width: 100%; height: 100%"
                 alt="hiasan">

        </div>
        <div bind:this={el_1} class="c-text before">
            <div style="text-align: center">
                <div class="heading-first">Will You Attend?</div>
                <div class="box-name">
                    <label for="name">Name</label>
                    <div style="display: flex; justify-content: center">
                        <input bind:value={nama} id="name">

                    </div>
                </div>
                <div class="box-hadir">
                    <div>Apakah Kamu Akan Hadir?</div>
                    <div style="margin-top: 0.5rem">
                        <input type="radio" id="ya" name="hadir" value="true" bind:group={hadir}>
                        <label for="ya">Ya Tentu</label>
                        <br/>
                        <input type="radio" id="tidak" name="hadir" value="false" bind:group={hadir}>
                        <label for="tidak">Maaf, Tidak</label>
                    </div>
                </div>
                <div class="box-jml-hadir">
                    <label>
                        Jumlah Tamu Yang Hadir?
                    </label>
                    <div>
                        <select bind:value={jumlah}>
                            <option value=1>1</option>
                            <option value=2>2</option>
                            <option value=3>3</option>
                            <option value=4>4</option>
                            <option value=5>5</option>
                            <option value=6>6</option>
                        </select>
                    </div>
                </div>
                <div class="submit">
                    <button on:click={submit}>SUBMIT</button>
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
        /*font-family: serif;*/
        font-style: italic;
        font-family: 'Playfair Display', serif;
    }

    .c_left {

        margin: 2rem;
        position: relative;
        height: 35rem;

    }

    .bg {
        height: 33rem;
        width: calc(100vw - 6rem);
        object-fit: cover;
        border-radius: 150px 150px 15px 15px;
        box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.3);
        border: 10px double #926962;
        opacity: .6;
    }

    .hiasan-atas {
        position: absolute;
        top: 0;
        left: 0;
        width: 50vw;
        transform: translate(-2rem, -2rem);
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


    .heading-first {
        font-size: x-large;
        text-align: center;
        /*font-family: 'Old Standard TT', serif;*/
        font-style: italic;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        margin-top: 2rem;
    }

    .box-name {
        margin-top: 2rem;
        text-align: left;
    }

    .box-name label {
        color: #6b5a4c;
    }

    .box-name input {
        all: initial;
        border-bottom: 1px solid #ae792d;
        width: 15rem;
        margin-top: 1rem;
        color: #926962;
    }

    .box-hadir {
        margin-top: 2rem;
        text-align: left;
    }

    .box-jml-hadir {
        text-align: left;
        margin-top: 3rem;
    }

    .box-jml-hadir select {
        background-color: transparent;
        border: 0;
        border-bottom: 1px solid #ae792d;
        width: 15rem;
        margin-top: 1rem;
        color: #926962;
        padding-left: 0.5rem;
    }

    .box-jml-hadir select:active {
        background-color: #926962;
    }

    .submit {
        margin-top: 2rem;
    }

    .submit button {
        background-color: #926962;
        padding: 0.5rem 1.5rem;
        color: white;
        border-radius: 0.5rem;
        font-style: italic;
        font-family: 'Playfair Display', serif;
    }

    .submit button:active {
        color: gray;
    }

    /* Untuk layar HP (misalnya, lebar kurang dari 768px) */
    @media (max-width: 767px) {
        .hiasan-atas {
            width: 50vw; /* Atur lebar sesuai dengan kebutuhan untuk layar HP */
        }
    }

    /* Untuk layar tablet (misalnya, lebar antara 768px dan 1024px) */
    @media (min-width: 768px) and (max-width: 1024px) {
        .hiasan-atas {
            width: 30vw; /* Atur lebar sesuai dengan kebutuhan untuk layar tablet */
        }
    }

    /* Untuk layar komputer (misalnya, lebar lebih dari 1024px) */
    @media (min-width: 1025px) {
        .hiasan-atas {
            width: 20vw; /* Atur lebar sesuai dengan kebutuhan untuk layar komputer */
        }
    }
</style>