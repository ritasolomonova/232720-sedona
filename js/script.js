var link = document.querySelector(".hotel-search-submit");
var popup = document.querySelector(".popup");
var form = popup.querySelector(".popup-form");
var arrive = popup.querySelector(".date-arrive");
var departure = popup.querySelector(".date-departure");
var adult = popup.querySelector(".amount-adult");
var child = popup.querySelector(".amount-child");

popup.classList.add("popup-hide");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("popup-hide");
    arrive.focus(); 
});
form.addEventListener("submit", function(event) {
    if (!arrive.value || !departure.value || !adult.value || !child.value) {
        event.preventDefault();
        console.log("Нужно ввести интересующие даты и количесво гостей"); 
    }  
});