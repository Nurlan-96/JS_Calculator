let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        const firstInput = parseInt(document.getElementById("left-input").value);
        const secondInput = parseInt(document.getElementById("right-input").value);
        let key = button.id;
        let result = "";

        function calculate() {
            switch (key) {
                case "add":
                    result = firstInput + secondInput;
                    break;

                case "sub":
                    result = firstInput - secondInput;
                    break;

                case "mul":
                    result = firstInput * secondInput;
                    break;

                case "dvd":
                    result = firstInput / secondInput;
                    break;

                default:
                    break;
            }
        }
        calculate();
        document.getElementById("box").innerText = result;
    });
});