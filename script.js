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
        price_Advance.innerHTML = `$<p id="price_advance">120<p>/yr`
        price_pro.innerHTML = `$<p id="price_pro">150<p>/yr`

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

// step transfar value step 3 
let last_price_select1 = document.querySelector(".L3_last_select1");
let last_price_select2 = document.querySelector(".L3_last_select2");
let last_price_select3 = document.querySelector(".L3_last_select3");
input_fuld.addEventListener("click",()=>{
    if(input_fuld.checked){
       last_price_select1.innerHTML = `$<p id="price_low">90<p>/yr`
       last_price_select2.innerHTML = `$<p id="price_low">10<p>/yr`
       last_price_select3.innerHTML = `$<p id="price_low">20<p>/yr`
    }
    else{
        last_price_select1.innerHTML = `$<p id="price_low">9<p>/mo`
        last_price_select2.innerHTML = `$<p id="price_low">1<p>/mo`
        last_price_select3.innerHTML = `$<p id="price_low">2<p>/mo`
    }
});

// start step 4
// transfar all value for total 
let L2_bil_name1 = document.querySelector("#card_bill_selector");
let L2_bil_name2 = document.querySelector("#card_bill_selector_2");
let L2_bil_name3 = document.querySelector("#card_bill_selector_3");
let bil_name1 = document.querySelector(".biling_name1");
let bil_name2 = document.querySelector(".biling_name2");
let bil_name3 = document.querySelector(".biling_name3");
// dashbord
let L2_dashBord_name_main = document.querySelector(".L2_dashBord_main_name");
let L2_dashBord_price = document.querySelector(".dash_L2_price");

L2_bil_name1.addEventListener("click",()=>{
    if(L2_bil_name1.checked){
       let total_bill_name = bil_name1.innerHTML
       L2_dashBord_name_main.innerHTML = total_bill_name;
    }
    else{

    }
});
L2_bil_name2.addEventListener("click",()=>{
    if(L2_bil_name2.checked){
       let total_bill_name = bil_name2.innerHTML
       L2_dashBord_name_main.innerHTML = total_bill_name;
    }
    else{

    }
});
L2_bil_name3.addEventListener("click",()=>{
    if(L2_bil_name3.checked){
       let total_bill_name = bil_name3.innerHTML
       L2_dashBord_name_main.innerHTML = total_bill_name;
    }
    else{
      
    }
});