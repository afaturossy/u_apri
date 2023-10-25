// import {onMount} from "svelte";
//

//
// onMount(() => {
//     target = document.querySelector(".in-view-element");
//
//     if (target) {
//         observer = new IntersectionObserver(handleIntersection, {
//             root: null,
//             rootMargin: "0px 0px -100px 0px",
//             threshold: 0.1,
//         });
//
//         observer.observe(target);
//     }
// });

export function obs(inView, observer, targetClass) {
    let target = document.querySelector(targetClass);

    if (target) {
        observer = new IntersectionObserver(function handleIntersection(entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    inView = true;
                    observer.disconnect();
                }
            });
        }, {
            root: null,
            rootMargin: "0px 0px -100px 0px",
            threshold: 0.1
        })

        observer.observe(target)
    }
}