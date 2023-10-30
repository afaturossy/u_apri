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

    export let data;
    console.log(data)
    async function reloadPesan() {
        const res = await fetch("/api/get-pesan")
        const pesan = await res.json()
        data.pesan = pesan.reverse()
    }
</script>
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
