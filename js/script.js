var link = document.querySelector(".hotel-search-submit");
        var popup = document.querySelector(".popup");
        var form = popup.querySelector(".popup-form");
        var arrive = popup.querySelector(".date-arrive");
        var departure = popup.querySelector(".date-departure");
        var adult = popup.querySelector(".amount-adult");
        var child = popup.querySelector(".amount-child");
        var adultstorage = localStorage.getItem("adult");
        var childstorage = localStorage.getItem("adult");
        
        link.addEventListener("click", function(event) {
            event.preventDefault();
            popup.classList.toggle("popup-show");
            arrive.focus();
            if (adultstorage) {
                adult.value = adultstorage;
            }  
            if (childstorage) {
                child.value = childstorage;
            }  
        });
        form.addEventListener("submit", function(event) {
            if (!arrive.value || !departure.value || !adult.value || !child.value) {
              event.preventDefault();
              console.log("Нужно ввести интересующие даты и количесво гостей"); 
            } else {
                localStorage.setItem("adult", adult.value);
                localStorage.setItem("child", child.value);
            }   
        });