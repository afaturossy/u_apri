<script>
    export let pesan
</script>

<div class="box-display">
    <div class="name">{pesan.nama}</div>
    <div class="comment">{pesan.pesan}</div>
</div>

<style>
    .box-display {
        margin: 1rem 0.5rem;
    }

    .box-display .name {
        font-weight: bold;
        font-family: "Playfair Display", sans-serif;

    }

    .box-display .comment {
        color: #888;
        margin-top: 0.5rem;
    }

    .cont-btn-reply {
        display: flex;
        margin-top: 0.5rem;
    }

    .btn-reply {
        background-color: transparent;
        border: 0;
        color: #999;
    }

    .btn-reply-icon {
        width: 1.5rem;
        rotate: 180deg;
        opacity: 0.3;
    }
</style>