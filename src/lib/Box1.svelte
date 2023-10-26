<script>
    import Nama2Calon from "$lib/Nama2Calon.svelte";
</script>

<div class="cont">
    <div class="title">SAVE THE DATE</div>

    <div class="c_left">
        <div>
            <Nama2Calon/>
        </div>
    </div>
    <div class="footer">
        <p>The Wedding |18.02.2024| Tangerang</p>
    </div>
</div>

<style>
    .cont {
        background-color: #efebe2;
        height: 38rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 0.5rem;
    }

    .title {
        font-size: large;
        /*font-family: 'Old Standard TT', serif;*/
        font-family: 'Playfair Display', serif;
        font-style: italic;
        font-weight: bold;
        text-align: center;
        padding-top: 3rem;
    }

    .c_left {
        display: flex;
        justify-items: center;
        justify-content: center;
        background-color: red;
        margin-top: 11rem;
    }

    .footer {
        font-family: 'Playfair Display', serif;
        font-style: italic;
        display: flex;
        justify-content: center;
        margin-top: 15rem
    }
</style>