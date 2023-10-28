<script>
    import AddUcapanBox from "$lib/AddUcapanBox.svelte";
    import BoxDisplayUcapan from "$lib/BoxDisplayUcapan.svelte";

    let komentar = []
</script>

<div class="cont">
    <div class="title">BEST WISHES</div>
    <div class="cont-tulis">
        <div>
            <div style="margin-top: 3rem">
                <AddUcapanBox/>
            </div>
            <div class="cont-display">
                <div class="jml-ucapan">3 UCAPAN</div>
                <div style="overflow-y: auto; max-height: 30rem; min-height: 5rem; margin-bottom: 2rem">
                    <BoxDisplayUcapan/>
                    <BoxDisplayUcapan/>
                    <BoxDisplayUcapan/>
                    <BoxDisplayUcapan/>
                    <BoxDisplayUcapan/>
                    <BoxDisplayUcapan/>
                    <BoxDisplayUcapan/>
                </div>
            </div>

        </div>
    </div>
</div>

<style>
    .cont {
        background-color: #efebe2;
        max-height: 65rem;
        min-height: 20rem;
        display: flex;
        flex-direction: column;
        border-radius: 0.5rem;
    }

    .title {
        font-size: 2.5rem;
        font-style: italic;
        font-family: 'Playfair Display', serif;
        text-align: center;
        padding-top: 5rem;
        color: #72482a;
    }

    .cont-tulis {
        display: flex;
        justify-content: center;
    }


    /*    display ucapan*/
    .jml-ucapan {
        border-bottom: 1px solid #333;
        font-family: Cinzel, sans-serif;
        font-weight: bold;
    }


</style>