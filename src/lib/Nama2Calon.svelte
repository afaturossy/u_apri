<div style="position: relative">
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
</div>

<style>
    .pos-tengah {
        position: absolute; /* Posisi horizontal di tengah parent */
        transform: translate(-50%, -50%); /* Membuat elemen tepat di tengah parent */
        font-family: 'Playfair Display', serif;
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