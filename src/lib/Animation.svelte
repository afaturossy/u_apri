
<div style="display: flex">
    <div class="anim-rotate">
        kopi
    </div>
</div>

<style>

    :global(.anim-scale) {
        animation: scaleOnce 1s linear;
        animation-iteration-count: 1;
    }
    :global(.before) {
        opacity: 0;
    }

    @keyframes scaleOnce {
        0% {
            opacity: .2;
            transform: scale(10%);
        }
        100% {
            opacity: 1;
            transform: scale(100%);
        }
    }

    :global(.anim-rotate) {
        animation: rotateOnce 1s linear;
        animation-iteration-count: 1;
    }

    @keyframes rotateOnce {
        0% {
            opacity: .2;
            transform: rotate(-180deg) scale(10%);
        }
        100% {
            opacity: 1;
            transform: rotate(0deg);
        }
    }

    :global(.anim-lmovescale) {
        animation: leftMoveScaleOnce 1s linear;
        animation-iteration-count: 1;
    }
    @keyframes leftMoveScaleOnce {
        0% {
            opacity: .2;
            transform: translate(-5rem ,-5rem) scale(1%);
        }
        100% {
            opacity: 1;
        }
    }

    :global(.anim-rmovescale) {
        animation: rightMoveScaleOnce 1s linear;
        animation-iteration-count: 1;
    }
    @keyframes rightMoveScaleOnce {
        0% {
            opacity: .2;
            transform: translate(5rem ,-5rem) scale(1%);
        }
        100% {
            opacity: 1;
        }
    }
    :global(.anim-bmovescale) {
        animation: bottomMoveScaleOnce 1.5s linear;
        animation-iteration-count: 1;
    }
    @keyframes bottomMoveScaleOnce {
        0% {
            opacity: 0;
            transform: translateY(3rem) scale(1%);
        }
        100% {
            opacity: 1;
        }
    }
</style>