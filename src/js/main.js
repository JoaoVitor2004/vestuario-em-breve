import "../scss/styles.scss";

const form = document.querySelector("#form")
const email = document.querySelector("#email")
const textError = document.querySelector("#text-error")

function showErrorInterface() {
    textError.classList.remove("hide")
    form.classList.add("border-error")
}

function clearErrorInterface() {
    textError.classList.add("hide")
    form.classList.remove("border-error")
}

email.addEventListener("input", clearErrorInterface)

form.addEventListener("submit", (event) => {
    event.preventDefault()

    if (!email.value.match(/[a-zA-Z0-9]+@+[a-zA-Z]+\.+[a-z]{1,3}/)) {
        Toastify({
            text: "Error, email invalid",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                width: "400px",
                background: "hsl(0, 93%, 68%)",
                color: "#fff"
            },
            onClick: function () { } // Callback after click
        }).showToast();
        showErrorInterface()
        return
    }

    form.submit()
})