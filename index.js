const time = document.querySelector('#time')
const color = document.querySelector('#color')

setInterval(function hexoTime() {
    let clock = new Date()
    let h = clock.getHours().toString()
    let m = clock.getMinutes().toString()
    let s = clock.getSeconds().toString()

    if (h.length < 2) {
        h = '0' + h
    }
    if (m.length < 2) {
        m = '0' + m
    }
    if (s.length < 2) {
        s = '0' + s
    }

    let timeString = h + ':' + m + ':' + s;
    let colorString = '#' + h + m + s;

    time.textContent = timeString;
    color.textContent = colorString;
    

    document.body.style.background = colorString;
}, 1000)