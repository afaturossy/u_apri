<script>
    import {onMount} from "svelte";

    let observer
    let el_1
    let el_2
    let el_3
    let el_4
    let el_5

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
    })


</script>

<div class="cont">
    <div style="display: flex ; justify-content: space-between">
        <div class="c_left">
            <img class="deco-l" src="/asset_apri/Untitled-3.png" alt="deco-l">
        </div>
        <div class="c_right">
            <img class="deco-r" src="/asset_apri/Untitled-3.png" alt="deco-r">
        </div>
    </div>
    <div class="content">
        <p bind:this={el_1} class="item1">Sang Mempelai</p>

        <p bind:this={el_2} class="item2">Apri Akbar</p>
        <div bind:this={el_3} class="item-3">
            <div>Putra ketiga dari</div>
            <div>Bapak Rustam Efendi Guci & Ibu Yuliani</div>
        </div>
        <div style="font-family: 'Playfair Display', serif ; font-size: xxx-large ; margin: 1rem 0 ;font-style: italic">
            &
        </div>
        <p bind:this={el_4} class="item2">Tuti Puji Rahayu</p>
        <div bind:this={el_5} class="item-3">
            <div>Putri pertama dari</div>
            <div>Bapak Slamet & Ibu Nur Jayati</div>
        </div>
    </div>
    <div
            style="display: flex ; justify-content: space-between ; transform: rotateX(180deg); margin-top: auto;"
    >
        <div class="c_left">
            <img class="deco-l-bottom" src="/asset_apri/Untitled-3.png" alt="deco-l">
        </div>
        <div class="c_right">
            <img class="deco-r-bottom" src="/asset_apri/Untitled-3.png" alt="deco-r">
        </div>
    </div>
</div>

<style>
    .cont {
        background-color: #efebe2;
        height: 40rem;
        display: flex;
        flex-direction: column;
        border-radius: 0.5rem;
    }

    /*----------------------*/
    .content {
        margin-top: 6rem;
        text-align: center;
    }

    .item1 {
        /*font-family: 'Old Standard TT', serif;*/
        /*font-style: italic;*/
        font-style: italic;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
    }

    .item2 {
        font-family: 'Playfair Display', sans-serif;
        font-style: italic;
        font-size: 2rem;

    }

    .item-3 {
        /*font-family: 'Quicksand', sans-serif;*/
        font-style: italic;
        font-family: 'Playfair Display', serif;
    }

    /*--------------------*/
    .deco-l {
        top: 0;
        left: 0;
        rotate: 90deg;
        position: absolute;
        transform: translate(-1.5rem, 2rem);
    }

    .deco-r {
        top: 0;
        right: 0;
        position: absolute;
        transform: rotateY(180deg) translate(-2.2rem, -1.5rem) rotate(90deg);
    }

    .deco-l-bottom {
        top: 0;
        left: 0;
        rotate: 90deg;
        position: absolute;
        transform: translate(-1.5rem, 2rem);
    }

    .deco-r-bottom {
        top: 0;
        right: 0;
        position: absolute;
        transform: rotateY(180deg) translate(-2.2rem, -1.5rem) rotate(90deg);
    }


    .c_right {
        position: relative;
        animation: rotate-left-right-deco-r 10s linear infinite;
        background-color: red;
    }

    .c_left {
        animation: rotate-left-right 10s linear infinite;
        position: relative;
        background-color: red;
    }

    @keyframes rotate-left-right {
        0% {
            transform: rotate(-5deg); /* Rotasi awal */
        }
        30% {
            transform: rotate(10deg); /* Rotasi ke kiri */
        }
        100% {
            transform: rotate(-5deg); /* Rotasi ke kanan */
        }
    }

    @keyframes rotate-left-right-deco-r {
        0% {
            transform: rotate(5deg); /* Rotasi awal */
        }
        25% {
            transform: rotate(-10deg); /* Rotasi ke kiri */
        }
        100% {
            transform: rotate(5deg); /* Rotasi ke kanan */
        }
    }

    /* Media query untuk layar HP (contoh: lebar maksimum 480px) */
    @media (max-width: 480px) {
        .deco-l {
            width: 52vw; /* Ubah lebar untuk HP */
        }

        .deco-r {
            width: 52vw; /* Ubah lebar untuk HP */
        }

        .deco-l-bottom {
            width: 45vw; /* Ubah lebar untuk HP */
        }

        .deco-r-bottom {
            width: 45vw; /* Ubah lebar untuk HP */
        }

    }

    /* Media query untuk layar tablet (contoh: lebar antara 481px hingga 768px) */
    @media (min-width: 481px) and (max-width: 768px) {
        .deco-l {
            width: 20vw; /* Ubah lebar untuk tablet */
        }

        .deco-r {
            width: 20vw; /* Ubah lebar untuk tablet */
        }

        .deco-l-bottom {
            width: 18vw; /* Ubah lebar untuk tablet */
        }

        .deco-r-bottom {
            width: 18vw; /* Ubah lebar untuk tablet */
        }
    }

    /* Media query untuk layar PC (contoh: lebar minimum 769px) */
    @media (min-width: 769px) {
        .deco-l {
            width: 20vw; /* Kembalikan lebar untuk PC */
        }

        .deco-r {
            width: 20vw; /* Kembalikan lebar untuk PC */
        }

        .deco-l-bottom {
            width: 18vw; /* Kembalikan lebar untuk PC */
        }

        .deco-r-bottom {
            width: 18vw; /* Kembalikan lebar untuk PC */
        }
    }
</style>