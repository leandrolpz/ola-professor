// Saudação dinâmica baseada no horário
const hora = new Date().getHours();
const saudacao = hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";

const h1 = document.querySelector("h1");
h1.textContent = `${saudacao}, Professor! 👋`;
