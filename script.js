let month = document.querySelector(".Monthly_main_text");
let year = document.querySelector(".Yearly_main_text");
let input_fuld = document.querySelector(".my_check_L2");
let free_text = document.querySelectorAll(".biling-item-free");
// biling price
let price_Low = document.querySelector(".biling-item-price_Ar");
let price_Advance = document.querySelector(".biling-item-price_A");
let price_pro = document.querySelector(".biling-item-price_pro");
// end billing price

input_fuld.addEventListener("click",()=>{
    if(input_fuld.checked){
        year.style.color = "#02295a";
        month.style.color = "#9699ab";
        for(i=0; i < free_text.length; i++){
            free_text[i].innerHTML = "2 month free";
        };
        // chenge price
        price_Low.innerHTML = `$<p id="price_low">90<p>/yr`
        price_Advance.innerHTML = `$<p id="price_low">120<p>/yr`
        price_pro.innerHTML = `$<p id="price_low">150<p>/yr`

    }
    else{
        year.style.color = "";
        month.style.color = "#02295a";
        for(i=0; i < free_text.length; i++){
            free_text[i].innerHTML = "";
        };
        // chenge price
        price_Low.innerHTML = `$<p id="price_low">9<p>/mo`
        price_Advance.innerHTML = `$<p id="price_low">12<p>/mo`
        price_pro.innerHTML = `$<p id="price_low">15<p>/mo`
    }
});

// step 3 start
let check1 = document.querySelector("#Labal_box1");
let check2 = document.querySelector("#Labal_box2");
let check3 = document.querySelector("#Labal_box3");

let service1 = document.querySelector(".sarvice_box_1");
let service2 = document.querySelector(".sarvice_box_2");
let service3 = document.querySelector(".sarvice_box_3");

check1.addEventListener("click",()=>{
    if(check1.checked){
        service1.style.backgroundColor = "hsl(217, 100%, 97%)";
        service1.style.borderColor = "hsl(243, 100%, 62%)";
    }
    else{
        service1.style.backgroundColor = "";
    }
});
check2.addEventListener("click",()=>{
    if(check2.checked){
        service2.style.backgroundColor = "hsl(217, 100%, 97%)";
        service2.style.borderColor = "hsl(243, 100%, 62%)";
    }
    else{
        service1.style.backgroundColor = "";
    }
});
check3.addEventListener("click",()=>{
    if(check3.checked){
        service3.style.backgroundColor = "hsl(217, 100%, 97%)";
        service3.style.borderColor = "hsl(243, 100%, 62%)";
    }
    else{
        service1.style.backgroundColor = "";
    }
});
// end step 3 all

// start step 4
