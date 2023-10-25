<script>
    import CoverDepan from "$lib/CoverDepan.svelte";
    import Box1 from "$lib/Box1.svelte";
    import Box2 from "$lib/Box2.svelte";
</script>
<div class="cont">
<!--    <CoverDepan/>-->
    <Box1/>
    <Box2/>
</div>
<style>
    .cont{
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
</style>
