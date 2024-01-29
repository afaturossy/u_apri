<script>


    import CoverDepan from "$lib/CoverDepan.svelte";
    import Box1 from "$lib/Box1.svelte";
    import Box2 from "$lib/Box2.svelte";
    import Box3 from "$lib/Box3.svelte";
    import Box4 from "$lib/Box4.svelte";
    import Box5 from "$lib/Box5.svelte";
    import Box6 from "$lib/Box6.svelte";
    import Box7 from "$lib/Box7.svelte";
    import Box8 from "$lib/Box8.svelte";
    import Box9 from "$lib/Box9.svelte";
    import Animation from "$lib/Animation.svelte";
    import Bird from "$lib/Bird.svelte";

    export let data;

    // console.log(data)
    async function reloadPesan() {
        const res = await fetch("/api/get-pesan")
        const pesan = await res.json()
        data.pesan = pesan.reverse()
    }
</script>

<svelte:head>
<!--    <meta property="og:title" content="Akbar & Puji | Undangan Pernikahan">-->
<!--    <meta property="og:description" content="Apri Akbar,S.T dan Tuti Puji Rahayu S.Gz Pada 18 Februari 2024">-->
<!--    <meta property="og:image" content="https://akbar-puji.digital/asset_apri/Foto_thumb.webp">-->
<!--    <meta property="og:image:type" content="image/webp">-->
<!--    <meta property="og:url" content="https://akbar-puji.digital">-->

    <!-- HTML Meta Tags -->
    <title> Undangan Pernikahan Akbar & Puji</title>
    <meta name="description" content="Apri Akbar,S.T dan Tuti Puji Rahayu S.Gz Pada 18 Februari 2024">

    <!-- Facebook Meta Tags -->
    <meta property="og:url" content="https://akbar-puji.digital">
    <meta property="og:type" content="website">
    <meta property="og:title" content=" Undangan Pernikahan Akbar & Puji">
    <meta property="og:description" content="Apri Akbar,S.T dan Tuti Puji Rahayu S.Gz Pada 18 Februari 2024">
    <meta property="og:image" content="https://akbar-puji.digital/asset_apri/Foto_thumb.webp">

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta property="twitter:domain" content="akbar-puji.digital">
    <meta property="twitter:url" content="https://akbar-puji.digital">
    <meta name="twitter:title" content=" Undangan Pernikahan Akbar & Puji">
    <meta name="twitter:description" content="Apri Akbar,S.T dan Tuti Puji Rahayu S.Gz Pada 18 Februari 2024">

    <meta name="twitter:image" content="https://akbar-puji.digital/asset_apri/Foto_thumb.webp">

</svelte:head>

<div style="position: fixed; top: 0; left: 0; right :0; z-index:  100;">
    <Bird/>
</div>

<div class="cont">
    <CoverDepan/>
    <Box1/>
    <Box2/>
    <Box3/>
    <Box4/>
    <Box5/>
    <Box6/>
    <Box7/>
    <Box8 pesan={data.pesan} reloadPesan={reloadPesan}/>
    <Box9/>
    <Animation/>
</div>
<style>
    .cont {
        display: flex;
        flex-direction: column;
        gap: 6px;
        overflow-x: hidden;
    }
</style>
