
//Aplicación básica que devuelve un mensaje.
function getGreeting() {
    return "Hola, CI/CD!";
}

module.exports = getGreeting;

if (require.main === module) {
    console.log(getGreeting());
}
