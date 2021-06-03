const cnt = document.querySelector(".container");
const divs = cnt.querySelectorAll('.el:not(.last-attempt), .el.last-attempt span');

const time = setInterval(_ => {
    let match = true;
    for (const div of divs) {
        const st = window.getComputedStyle(div);
        if (st.animationDelay !== "1s") {
            match = false;
        }
    }

    if (match) {
        clearInterval(time);
        document.querySelector('.container').remove();
        document.body.classList.add('win');
        const div = document.createElement('div');
        div.classList.add('video-cnt');
        div.innerHTML = '<div><iframe width="560" height="315" src="https://www.youtube.com/embed/zYt0WbDjJ4E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>';
        document.body.appendChild(div)
    }
}, 700);