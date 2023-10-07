function attachGradientEvents() {
    let result = document.getElementById('result')
    let hover = document.getElementById('gradient')

    hover.addEventListener('mousemove', function (e) {
        let hoverResult = Math.floor((e.offsetX / e.target.offsetWidth) * 100)

        result.textContent = `${hoverResult}%`
    })
}