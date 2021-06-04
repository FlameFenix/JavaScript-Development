function attachGradientEvents() {
    let divElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    divElement.addEventListener('mousemove', (e) => {
        const percent = Math.floor(e.offsetX / divElement.clientWidth * 100);
        resultElement.textContent = `${percent}%`;
    });
}