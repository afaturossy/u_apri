<div class="container">
    <div class="bird-container bird-container--one">
        <div class="bird bird--one"></div>
    </div>

    <div class="bird-container bird-container--two">
        <div class="bird bird--two"></div>
    </div>

    <div class="bird-container bird-container--three">
        <div class="bird bird--three"></div>
    </div>

    <div class="bird-container bird-container--four">
        <div class="bird bird--four"></div>
    </div>
</div>

<style>
    .bird {
        background-image: url(https://undangan.akbar-puji.digital/asset_apri/bird-cells.svg);
        background-size: auto 100%;
        width: 88px;
        height: 125px;
        will-change: background-position;
        -webkit-animation-name: fly-cycle;
        animation-name: fly-cycle;
        -webkit-animation-timing-function: steps(10);
        animation-timing-function: steps(10);
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
    }

    .bird--one {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-delay: -0.5s;
        animation-delay: -0.5s;
    }
    .bird--two {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-delay: -0.75s;
        animation-delay: -0.75s;
    }
    .bird--three {
        -webkit-animation-duration: 1.25s;
        animation-duration: 1.25s;
        -webkit-animation-delay: -0.25s;
        animation-delay: -0.25s;
    }
    .bird--four {
        -webkit-animation-duration: 1.25s;
        animation-duration: 1.25s;
        -webkit-animation-delay: -0.5s;
        animation-delay: -0.5s;
    }

    .bird-container {
        position: absolute;
        top: 20%;
        left: -10%;
        -webkit-transform: scale(0) translateX(-10vw);
        transform: scale(0) translateX(-10vw);
        will-change: transform;
        -webkit-animation-name: fly-right-one;
        animation-name: fly-right-one;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
    }
    .bird-container--one {
        -webkit-animation-duration: 15s;
        animation-duration: 15s;
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
        /*background-color: blue;*/
    }
    .bird-container--two {
        /*background-color: red;*/
        -webkit-animation-duration: 15s;
        animation-duration: 15s;
        -webkit-animation-delay: 1s;
        animation-delay: 1s;
    }
    .bird-container--three {
        -webkit-animation-duration: 16s;
        animation-duration: 16s;
        -webkit-animation-delay: 9.5s;
        animation-delay: 9.5s;
        /*background-color: lime;*/
    }
    .bird-container--four {
        -webkit-animation-duration: 16s;
        animation-duration: 16s;
        -webkit-animation-delay: 10.25s;
        animation-delay: 10.25s;
        /*background-color: yellow;*/
    }

    @-webkit-keyframes fly-cycle {
        100% {
            background-position: -900px 0;
        }
    }

    @keyframes fly-cycle {
        100% {
            background-position: -900px 0;
        }
    }
    @-webkit-keyframes fly-right-one {
        0% {
            -webkit-transform: scale(0.3) translateX(-10vw);
            transform: scale(0.3) translateX(-10vw);
        }
        10% {
            -webkit-transform: translateY(2vh) translateX(10vw) scale(0.4);
            transform: translateY(2vh) translateX(10vw) scale(0.4);
        }
        20% {
            -webkit-transform: translateY(0vh) translateX(30vw) scale(0.5);
            transform: translateY(0vh) translateX(30vw) scale(0.5);
        }
        30% {
            -webkit-transform: translateY(4vh) translateX(50vw) scale(0.6);
            transform: translateY(4vh) translateX(50vw) scale(0.6);
        }
        40% {
            -webkit-transform: translateY(2vh) translateX(70vw) scale(0.6);
            transform: translateY(2vh) translateX(70vw) scale(0.6);
        }
        50% {
            -webkit-transform: translateY(0vh) translateX(90vw) scale(0.6);
            transform: translateY(0vh) translateX(90vw) scale(0.6);
        }
        60% {
            -webkit-transform: translateY(0vh) translateX(110vw) scale(0.6);
            transform: translateY(0vh) translateX(110vw) scale(0.6);
        }
        100% {
            -webkit-transform: translateY(0vh) translateX(110vw) scale(0.6);
            transform: translateY(0vh) translateX(110vw) scale(0.6);
        }
    }
    @keyframes fly-right-one {
        0% {
            -webkit-transform: scale(0.3) translateX(-10vw);
            transform: scale(0.3) translateX(-10vw);
        }
        10% {
            -webkit-transform: translateY(2vh) translateX(10vw) scale(0.4);
            transform: translateY(2vh) translateX(10vw) scale(0.4);
        }
        20% {
            -webkit-transform: translateY(0vh) translateX(30vw) scale(0.5);
            transform: translateY(0vh) translateX(30vw) scale(0.5);
        }
        30% {
            -webkit-transform: translateY(4vh) translateX(50vw) scale(0.6);
            transform: translateY(4vh) translateX(50vw) scale(0.6);
        }
        40% {
            -webkit-transform: translateY(2vh) translateX(70vw) scale(0.6);
            transform: translateY(2vh) translateX(70vw) scale(0.6);
        }
        50% {
            -webkit-transform: translateY(0vh) translateX(90vw) scale(0.6);
            transform: translateY(0vh) translateX(90vw) scale(0.6);
        }
        60% {
            -webkit-transform: translateY(0vh) translateX(110vw) scale(0.6);
            transform: translateY(0vh) translateX(110vw) scale(0.6);
        }
        100% {
            -webkit-transform: translateY(0vh) translateX(110vw) scale(0.6);
            transform: translateY(0vh) translateX(110vw) scale(0.6);
        }
    }
    @-webkit-keyframes fly-right-two {
        0% {
            -webkit-transform: translateY(-2vh) translateX(-10vw) scale(0.5);
            transform: translateY(-2vh) translateX(-10vw) scale(0.5);
        }
        10% {
            -webkit-transform: translateY(0vh) translateX(10vw) scale(0.4);
            transform: translateY(0vh) translateX(10vw) scale(0.4);
        }
        20% {
            -webkit-transform: translateY(-4vh) translateX(30vw) scale(0.6);
            transform: translateY(-4vh) translateX(30vw) scale(0.6);
        }
        30% {
            -webkit-transform: translateY(1vh) translateX(50vw) scale(0.45);
            transform: translateY(1vh) translateX(50vw) scale(0.45);
        }
        40% {
            -webkit-transform: translateY(-2.5vh) translateX(70vw) scale(0.5);
            transform: translateY(-2.5vh) translateX(70vw) scale(0.5);
        }
        50% {
            -webkit-transform: translateY(0vh) translateX(90vw) scale(0.45);
            transform: translateY(0vh) translateX(90vw) scale(0.45);
        }
        51% {
            -webkit-transform: translateY(0vh) translateX(110vw) scale(0.45);
            transform: translateY(0vh) translateX(110vw) scale(0.45);
        }
        100% {
            -webkit-transform: translateY(0vh) translateX(110vw) scale(0.45);
            transform: translateY(0vh) translateX(110vw) scale(0.45);
        }
    }
    @keyframes fly-right-two {
        0% {
            -webkit-transform: translateY(-2vh) translateX(-10vw) scale(0.5);
            transform: translateY(-2vh) translateX(-10vw) scale(0.5);
        }
        10% {
            -webkit-transform: translateY(0vh) translateX(10vw) scale(0.4);
            transform: translateY(0vh) translateX(10vw) scale(0.4);
        }
        20% {
            -webkit-transform: translateY(-4vh) translateX(30vw) scale(0.6);
            transform: translateY(-4vh) translateX(30vw) scale(0.6);
        }
        30% {
            -webkit-transform: translateY(1vh) translateX(50vw) scale(0.45);
            transform: translateY(1vh) translateX(50vw) scale(0.45);
        }
        40% {
            -webkit-transform: translateY(-2.5vh) translateX(70vw) scale(0.5);
            transform: translateY(-2.5vh) translateX(70vw) scale(0.5);
        }
        50% {
            -webkit-transform: translateY(0vh) translateX(90vw) scale(0.45);
            transform: translateY(0vh) translateX(90vw) scale(0.45);
        }
        51% {
            -webkit-transform: translateY(0vh) translateX(110vw) scale(0.45);
            transform: translateY(0vh) translateX(110vw) scale(0.45);
        }
        100% {
            -webkit-transform: translateY(0vh) translateX(110vw) scale(0.45);
            transform: translateY(0vh) translateX(110vw) scale(0.45);
        }
    }
</style>