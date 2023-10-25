<div class="cont-fix">
    <div class="container-cover-depan">
        <img alt="bg" class="bg-1" src="/asset_apri/bg_1.jpeg">
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
                <div>Pujiono</div>
            </div>
        </div>
        <div class="pos-tengah-bawah">
            <div class="open-btn">
                Open Invitation
                <img class="open-btn-hiasan" src="/asset_apri/arrow-kanan.svg">
            </div>
        </div>
    </div>

</div>

<style>
    .cont-fix {
        position: fixed;
        top: 0;
        left: 0;
    }

    .container-cover-depan {
        position: relative;
    }

    .bg-1 {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
    }

    .pos-tengah {
        position: absolute;
        top: 45%; /* Posisi vertikal di tengah parent */
        left: 50%; /* Posisi horizontal di tengah parent */
        transform: translate(-50%, -50%); /* Membuat elemen tepat di tengah parent */
        font-family: 'Playfair Display', serif;
    }

    .pos-tengah-atas {
        position: absolute;
        top: 18%; /* Posisi vertikal di tengah parent */
        left: 50%; /* Posisi horizontal di tengah parent */
        transform: translate(-50%, -50%); /* Membuat elemen tepat di tengah parent */
        font-family: 'Playfair Display', serif;
    }

    .pos-tengah-bawah {
        position: absolute;
        top: 80%; /* Posisi vertikal di tengah parent */
        left: 50%; /* Posisi horizontal di tengah parent */
        transform: translate(-50%, -50%); /* Membuat elemen tepat di tengah parent */
        font-family: 'ABeeZee', sans-serif;
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
    }

    .hiasan-1 {
        padding-top: 1.5rem;
        z-index: 1;
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

</style>