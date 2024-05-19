let month = document.querySelector(".Monthly_main_text");
let year = document.querySelector(".Yearly_main_text");
let input_fuld = document.querySelector(".my_check_L2");
let free_text = document.querySelectorAll(".biling-item-free");
// biling price
let price_Low = document.querySelector(".biling-item-price_Ar");
let price_Advance = document.querySelector(".biling-item-price_A");
let price_pro = document.querySelector(".biling-item-price_pro");
// end billing price
// total name add
let total_name = document.querySelector(".total_name_text");

input_fuld.addEventListener("click",()=>{
    if(input_fuld.checked){
        year.style.color = "#02295a";
        month.style.color = "#9699ab";
        for(i=0; i < free_text.length; i++){
            free_text[i].innerHTML = "2 month free";
        };
        // chenge price
        price_Low.innerHTML = `<p>$</p><p id="price_low" class="Low last_biling">90<p>/yr`
        price_Advance.innerHTML = `<p>$</p><p id="price_advance" class="advence last_biling">120</p>/yr`
        price_pro.innerHTML = `<p>$</p><p id="price_pro" class="pro last_biling">150<p>/yr`
        total_name.innerHTML = "total(per year)"


    }
    else{
        year.style.color = "";
        month.style.color = "#02295a";
        for(i=0; i < free_text.length; i++){
            free_text[i].innerHTML = "";
        };
        // chenge price
        price_Low.innerHTML = `<p>$</p><p id="price_low" class="Low last_biling">9</p>/mo`
        price_Advance.innerHTML = `<p>$</p><p id="price_advance" class="advence last_biling">12</p>/mo`
        price_pro.innerHTML = `<p>$</p><p id="price_pro" class="pro last_biling">15</p>/mo`
        total_name.innerHTML = "total(per month)"
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
       last_price_select1.innerHTML = `+$<p id="price_lo">10<p>/yr`
       last_price_select2.innerHTML = `+$<p id="price_ad">20<p>/yr`
       last_price_select3.innerHTML = `+$<p id="price_pr">20<p>/yr`
    }
    else{
        last_price_select1.innerHTML = `+$<p id="price_lo">1<p>/mo`
        last_price_select2.innerHTML = `+$<p id="price_ad">2<p>/mo`
        last_price_select3.innerHTML = `+$<p id="price_pr">2<p>/mo`
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
// price 
let L2_dashBord_price = document.querySelector(".dash_L3_price");



L2_bil_name1.addEventListener("click",()=>{
    if(L2_bil_name1.checked){
       let total_bill_name = bil_name1.innerHTML;
       L2_dashBord_name_main.innerHTML = total_bill_name;
       let filal_p1 = price_Low.innerHTML;
       L2_dashBord_price.innerHTML = filal_p1;
    }
    else{

    }
});
L2_bil_name2.addEventListener("click",()=>{
    if(L2_bil_name2.checked){
       let total_bill_name = bil_name2.innerHTML
       L2_dashBord_name_main.innerHTML = total_bill_name;
       let filal_p2 = price_Advance.innerHTML;
       L2_dashBord_price.innerHTML = filal_p2;
    }
    else{

    }
});
L2_bil_name3.addEventListener("click",()=>{
    if(L2_bil_name3.checked){
       let total_bill_name = bil_name3.innerHTML
       L2_dashBord_name_main.innerHTML = total_bill_name;
       let filal_p3 = price_pro.innerHTML;
       L2_dashBord_price.innerHTML = filal_p3;
    }
    else{
      
    }
});

// pic add ons items 
let pic_item_dash1 = document.querySelector(".create-pic-add-items1");
let pic_item_dash2 = document.querySelector(".create-pic-add-items2");
let pic_item_dash3 = document.querySelector(".create-pic-add-items3");
check1.addEventListener("click",()=>{
   if(check1.checked){
     pic_item_dash1.innerHTML = `
     <div class="L3_add_price">
        <div class="L3_item_name"><p>Online Sarvice</p></div>
        <div class="L3_item_price">${last_price_select1.innerHTML}</div>
    </div>
     `
   }
})
check2.addEventListener("click",()=>{
   if(check2.checked){
     pic_item_dash2.innerHTML = `
     <div class="L3_add_price">
       <div class="L3_item_name"><p>Larger storage</p></div>
       <div class="L3_item_price">${last_price_select2.innerHTML}</div>
    </div>
     `
   }
})
check3.addEventListener("click",()=>{
   if(check3.checked){
     pic_item_dash3.innerHTML = `
     <div class="L3_add_price">
       <div class="L3_item_name"><p>Customizable Profile</p></div>
       <div class="L3_item_price">${last_price_select3.innerHTML}</div>
    </div>
     `
   }
})

// slide form 
// next buttons
let slideBtn1 = document.querySelector(".next_btn1");
let slideBtn2 = document.querySelector(".next_btn2");
let slideBtn3 = document.querySelector(".next_btn3");
let slideBtn4 = document.querySelector(".next_btn4");
// back buttons
let back_btn1 = document.querySelector(".prev_btn1");
let back_btn2 = document.querySelector(".prev_btn2");
let back_btn3 = document.querySelector(".prev_btn3");
// form slide 
let slideForm1 = document.querySelector(".step_1");
let slideForm2 = document.querySelector(".setp_2");
let slideForm3 = document.querySelector(".setp_3");
let slideForm4 = document.querySelector(".setp_4");
// all inputs
let input_name = document.querySelector(".name");
let input_email = document.querySelector(".email");
let input_phone = document.querySelector(".phone");
let error_name = document.querySelector(".error_text");
let error_email = document.querySelector(".error_email");
let error_phone = document.querySelector(".error_phone");

// validation 1 
function myvalidationA(){
    let isvalid = true;
    var name = document.forms["my_form_1"]["name"].value;
    if(name.length<3){
        error_name.innerHTML = "*This fuld is requred";
        input_name.style.borderColor = "red";
        isvalid = false;
    }
    
    var email = document.forms["my_form_1"]["M-email"].value;
    if(email.length<5){
        error_email.innerHTML = "*This fuld is requred";
        input_email.style.borderColor = "red";
        isvalid = false;
    }
    var phone = document.forms["my_form_1"]["phone"].value;
    if(phone.length<10){
        error_phone.innerHTML = "*This fuld is requred";
        input_phone.style.borderColor = "red";
        isvalid = false;
    }
    
    if(phone.length>10 && email.length>5 && name.length>3){
        slideForm1.style.display = "none";
        slideForm2.style.display = "block";
        isvalid = false;
    }
    return isvalid;

}
// end validation 1 
slideBtn2.addEventListener("click",()=>{
    slideForm2.style.display = "none";
    slideForm3.style.display = "block";
})
slideBtn3.addEventListener("click",()=>{
    slideForm3.style.display = "none";
    slideForm4.style.display = "block";
})

back_btn1.addEventListener("click",()=>{
    slideForm1.style.display = "block";
    slideForm2.style.display = "none";
})
back_btn2.addEventListener("click",()=>{
    slideForm2.style.display = "block";
    slideForm3.style.display = "none";
})
back_btn3.addEventListener("click",()=>{
    slideForm3.style.display = "block";
    slideForm4.style.display = "none";
})

// total calculation 
// let M_Y_biling_amount = document.querySelector(".last_biling");
// let M_Y_biling_amount_adv = document.querySelector(".advence");
// let M_Y_biling_amount_pro = document.querySelector(".pro");
// select onece
// let price_select_onece_low = document.querySelector(".price_lo");
// let price_select_onece_adv = document.querySelector(".price_ad");
// let price_select_onece_pro = document.querySelector(".price_pr");
// slideBtn2.addEventListener("click",()=>{
//   let total_bil = M_Y_biling_amount.innerHTML;
//   alert(total_bil);
// })





