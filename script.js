const messages = [
    "¿Segura?",
    "¿Es en serio?",
    "No digas que no please",
    "Cupcake...",
    "Valeria DI QUE SIIII NO SEAS MALA, TE ESTOY VIENDO",
    "Si dices que no, voy a estar triste, triste",
    "¿No te importan mis sentimientos?",
    "DI QUE SI HERMOSA",
    "HERMOSA, HERMOSA, PORFAVOOOR",
    "Solo di que sí, no te cuesta nada"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

function Carta()
{
    window.location.href = "cartita.html"
}