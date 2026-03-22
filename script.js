alert("JS connected");

let display = document.querySelector(".display");

let buttons = document.querySelectorAll(".keys, .zero");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        let value = button.innerText.trim();

        if (value === "AC") {
            display.innerText = "";
        }

        else if (value === "DEL") {
            display.innerText = display.innerText.slice(0, -1);
        }

        else if (value === "=") {
            try {
                let expression = display.innerText
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/");

                display.innerText = eval(expression);
            } catch {
                display.innerText = "Error";
            }
        }

        else if (value === "%") {
            try {
                display.innerText = eval(display.innerText) / 100;
            } catch {
                display.innerText = "Error";
            }
        }

        else {
            display.innerText += value;
        }
    });
});