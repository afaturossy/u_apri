<script>
    import Nama2Calon from "$lib/Nama2Calon.svelte";
</script>

<div class="cont">
    <div class="title">SAVE THE DATE</div>
    <div></div>
    <div></div>
    <div></div>
    <div class="c_left">
        <div>
            <Nama2Calon/>
        </div>
    </div>
    <div class="footer">
        <p>The Wedding |11.03.2021| Kudus</p>
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

    .title {
        font-size: large;
        font-family: 'Old Standard TT', serif;
        font-weight: bold;
        text-align: center;
        padding-top: 5vh;
    }

    .c_left {
        display: flex;
        justify-items: center;
        justify-content: center;
        background-color: red;
    }

    .footer {
        display: flex;
        justify-content: center;
        margin-top: 40vh
    }
</style>