const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".boton");

// Función para manejar el clic de los botones
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const botonPresionado = btn.textContent;

        // Manejar el botón AC (clear)
        if (botonPresionado === "AC") {
            display.value = "";
        } 
        // Manejar el botón DEL (delete)
        else if (botonPresionado === "DEL") {
            display.value = display.value.slice(0, -1);
        } 
        // Manejar el botón de igual (equal)
        else if (botonPresionado === "=") {
            try {
                display.value = eval(display.value.replace('x', '*').replace('÷', '/'));
            } catch {
                display.value = "Error";
            }
        } else if (botonPresionado === "%"){
            try{
                display.value = (eval(display.value.replace('x', '*').replace('÷', '/'))/100).toString();
            }catch{
                display.value = "Error"
            }
        }
        // Manejar el botón de raíz cuadrada
        else if (botonPresionado === "√") {
            try {
                // Evalúa la expresión actual
                let value = eval(display.value.replace('x', '*').replace('÷', '/'));
                if (value < 0) {
                    throw "No se permite raiz cuadrada negativa"; // Lanzar error 
                }
                // Calcula la raíz cuadrada del valor actual en el display
                display.value = Math.sqrt(value).toString();
            } catch (e) {
                display.value = e === "No se permite raiz cuadrada negativa" ? "Error: √(-)" : "Error";
            }
        } 
         // Manejar el botón de potencia
         else if (botonPresionado === "x²") {
            try {
                // Evalúa la expresión actual
                let value = eval(display.value.replace('x', '*').replace('÷', '/'));
                // Calcula la potencia de 2 del valor actual en el display
                display.value = Math.pow(value, 2).toString();
            } catch {
                display.value = "Error";
            }
        }
        // Manejar otros botones
        else {
            display.value += botonPresionado;
        }
    });
});
