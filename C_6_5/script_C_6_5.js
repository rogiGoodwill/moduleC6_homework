const btnNode = document.querySelector('button');
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

btnNode.addEventListener('click', () => {
    alert(`Ширина экрана: ${screenWidth}. Высота экрана: ${screenHeight}.`)
})