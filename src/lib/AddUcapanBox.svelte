<div>
    <div class="flex-center">
        <textarea placeholder="Tulis Ucapan"></textarea>
    </div>
    <div class="flex-center">

        <div style="display: flex; margin-top: 1rem">

            <img src="/asset_apri/user_icon.svg" alt="user icon" class="user-icon">

            <input placeholder="Nama Lengkap*">
        </div>
    </div>
    <div style="display: flex; justify-content: right">
        <button class="btn-kirim">Kirim</button>
    </div>
</div>


<style>
    .flex-center {
        display: flex;
        justify-content: center;

    }

    .btn-kirim {
        margin-top: 1rem;
        font-size: 1rem;
        padding: 0.3rem 0.7rem;
        border-radius: 3px;
        background-color: white;
        border: 2px solid #c9c2c2;
        color: #a49f9f;
    }

    .btn-kirim:active {
        background-color: pink;
    }

    textarea {
        width: 60vw;
        padding: 0.5rem 0.5rem;
        resize: none;
        color: #72482a;
        height: 3rem;
        border: 2px solid #c9c2c2;
        border-radius: 5px;
    }

    textarea {
        outline: none;
    }

    input {
        width: 55vw;
        padding: 0.3rem;
        border: 2px solid #c9c2c2;
        border-left: none;
        color: #72482a;
        border-radius: 0 5px 5px 0;
    }

    input:focus {
        outline: none;

    }

    .user-icon {
        width: 1rem;
        height: 1rem;
        background-color: white;
        padding: 0.3rem;
        border: 2px solid #c9c2c2;
        border-right: none;
        border-radius: 5px 0 0 5px;
    }

</style>