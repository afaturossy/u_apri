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
                <div style="overflow-y: auto; height: 20rem;">
<!--                    <div class="box-display">-->
<!--                        <div class="name">abang jafar</div>-->
<!--                        <div class="comment">selamat ya</div>-->
<!--                        <div class="cont-btn-reply">-->
<!--                            <img class="btn-reply-icon" src="/asset_apri/reply-icon.webp">-->
<!--                            <button class="btn-reply">Reply</button>-->
<!--                        </div>-->
<!--                        <div style="margin-top: 1rem; margin-left: 0.2rem">-->
<!--&lt;!&ndash;                            <AddUcapanBox/>&ndash;&gt;-->
<!--                        </div>-->
<!--                    </div>-->
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
        height: 45rem;
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