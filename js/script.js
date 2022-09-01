const elSiteForm = document.querySelector(".site-form");
const elSumma = document.querySelector(".summa-pest-input");
const elSelect = document.querySelector(".form-select");
const elNatija = document.querySelector(".natija-text");

const elKursLogo = document.querySelector(".kurs-logo")
const elNatija2 = document.querySelector(".natija-2")

elSiteForm.addEventListener("submit", function (e) {
    event.preventDefault()

    var SummaValue = elSumma.value;
    var selectValue = elSelect.value

    var Natija = Math.round( SummaValue * selectValue );

    elNatija.textContent = `${Natija} sum`
    elNatija2.textContent = `${Natija}`
    
})
