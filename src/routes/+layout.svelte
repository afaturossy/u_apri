<script>
    import Bird from "$lib/Bird.svelte";
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Cinzel:wght@500&family=Old+Standard+TT&family=Playfair+Display:ital,wght@0,500;1,500&family=Quicksand&display=swap"
          rel="stylesheet">
    <title>UNDANGAN PERNIKAHAN AKBAR & PUJI</title>
    <meta name="description" content="undangan pernikahan akbar & puji , tahun 2024"/>
</svelte:head>

<div style="position: fixed; top: 0; left: 0; right :0; z-index:  100;">
    <Bird/>
</div>
<slot/>

<style>
    :global(body) {
        background-color: #926962;
        overflow-x: hidden;
    }
</style>