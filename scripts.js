const convertbutton = document.querySelector(".convert-button") 
const currencyselect = document.querySelector(".currency-select")

function convertvalues() {
    const inputcurrencyvalue = Number(document.querySelector(".input-currency").value) // transforma o valor para número
    const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert") // valor em real
    const currencyvalueconverted = document.querySelector(".currency-value") // outras moedas

    const dolartoday = 5.2
    const eurotoday = 6.2
    const libratoday = 7.2

    // *Exibindo o valor em reais formatado corretamente*
    currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputcurrencyvalue)

    if (currencyselect.value === "dolar") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyvalue / dolartoday)
    }

    if (currencyselect.value === "euro") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyvalue / eurotoday)
    }

    if (currencyselect.value === "libra") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputcurrencyvalue / libratoday)
    }

    if (currencyselect.value === "real") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputcurrencyvalue) // aqui exibe o próprio valor de entrada
    }
}

function changecurrency() {
    const currencyname = document.getElementById("currency-name")
    const currencyimage = document.querySelector(".currency-img")

    if (currencyselect.value === "dolar") {
        currencyname.innerHTML = "Dólar Americano"
        currencyimage.src = "./assets/estados-unidos (1) 1.png"
    }

    if (currencyselect.value === "euro") {
        currencyname.innerHTML = "Euro"
        currencyimage.src = "./assets/Design sem nome 3.png"
    }

    if (currencyselect.value === "libra") {
        currencyname.innerHTML = "Libra"
        currencyimage.src = "./assets/th.jpeg"
    }

    if (currencyselect.value === "real") {
        currencyname.innerHTML = "Real Brasileiro"
        currencyimage.src = "./assets/real.png" // Coloque o caminho correto da imagem para o Real
    }

    convertvalues()
}

currencyselect.addEventListener("change", changecurrency)
convertbutton.addEventListener("click", convertvalues)