<div class="cont">
    <div class="c_left">
        <img class="bg" src="/asset_apri/bg_1.jpeg" alt="bg">
        <div class="c-text">
            <div style="text-align: center">
                <div class="heading-first">Will You Attend?</div>
                <div class="box-name">
                    <label for="name">Name</label>
                    <div style="display: flex; justify-content: center">
                        <input id="name">

                    </div>
                </div>
                <div class="box-hadir">
                    <div>Apakah Kamu Akan Hadir?</div>
                    <div style="margin-top: 0.5rem">
                        <input type="radio" id="ya" name="hadir" value="Ya Tentu">
                        <label for="ya">Ya Tentu</label>
                        <br/>
                        <input type="radio" id="tidak" name="hadir" value="Maaf, Tidak">
                        <label for="tidak">Maaf, Tidak</label>
                    </div>
                </div>
                <div class="box-jml-hadir">
                    <label>
                        Jumlah Tamu Yang Hadir?
                    </label>
                    <div>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </select>
                    </div>
                </div>
                <div class="submit">
                    <button>SUBMIT</button>
                </div>
            </div>
        </div>
    </div>

</div>

<style>
    .cont {
        background-color: #efebe2;
        height: calc(95vh - 16px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 0.5rem;
        font-family: serif;
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


    .heading-first {
        font-size: x-large;
        text-align: center;
        font-family: 'Old Standard TT', serif;
        font-weight: bold;
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
    .box-jml-hadir select:active{
        background-color: #926962;
    }
    .submit{
        margin-top: 2rem;
    }
    .submit button{
        background-color: #926962;
        padding: 0.5rem 1.5rem;
        color: white;
        border-radius: 0.5rem;
    }
    .submit button:active{
        color: gray;
    }
</style>