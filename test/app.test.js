const getGreeting = require("../app");

test("Debe devolver el mensaje correcto", () => {
    expect(getGreeting()).toBe("Hola, CI/CD!");
});
