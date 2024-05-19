let month = document.querySelector(".Monthly_main_text");
let year = document.querySelector(".Yearly_main_text");
let input_fuld = document.querySelector(".my_check_L2");
let free_text = document.querySelectorAll(".biling-item-free");
// biling price

// let price_Low = document.querySelector(".biling-item-price_Ar");
// let price_Advance = document.querySelector(".biling-item-price_A");
// let price_pro = document.querySelector(".biling-item-price_pro");

let price_Low = document.querySelector(".Low");
let price_Low_yr_mo = document.querySelector(".per_yer_month");
let price_Low_yr_mo_A = document.querySelector(".per_yer_month_A");
let price_Low_yr_mo_p = document.querySelector(".per_yer_month_p");
let price_Advance = document.querySelector(".advence");
let price_pro = document.querySelector(".pro");

// end billing price
// total name add
let dash_per_Mo_Yr = document.querySelector(".dash_per_M_Y");
let total_name = document.querySelector(".total_name_text");

input_fuld.addEventListener("click",()=>{
    if(input_fuld.checked){
        year.style.color = "#02295a";
        month.style.color = "#9699ab";
        for(i=0; i < free_text.length; i++){
            free_text[i].innerHTML = "2 month free";
        };
        // chenge price
        price_Low.innerHTML = `90`;
        price_Low_yr_mo.innerHTML=`/yr`;

        price_Advance.innerHTML = `120`;
        price_Low_yr_mo_A.innerHTML = `/yr`

        price_pro.innerHTML = `150`
        price_Low_yr_mo_p = `/yr`;
        
        dash_per_Mo_Yr.innerHTML = `/yr`
        total_name.innerHTML = "total(per year)";


    }
    else{
        year.style.color = "";
        month.style.color = "#02295a";
        for(i=0; i < free_text.length; i++){
            free_text[i].innerHTML = "";
        };
        // chenge price
        price_Low.innerHTML = `9`;
        price_Low_yr_mo.innerHTML=`/mo`;

        price_Advance.innerHTML = `12`;
        price_Low_yr_mo_A.innerHTML = `/mo`;

        price_pro.innerHTML = `15`;
        price_Low_yr_mo_p = `/mo`;
        
        dash_per_Mo_Yr.innerHTML = `/mo`
        total_name.innerHTML = "total(per month)";
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
        service1.style.borderColor = "";
    }
});
check2.addEventListener("click",()=>{
    if(check2.checked){
        service2.style.backgroundColor = "hsl(217, 100%, 97%)";
        service2.style.borderColor = "hsl(243, 100%, 62%)";
    }
    else{
        service2.style.backgroundColor = "";
        service2.style.borderColor = "";
    }
});
check3.addEventListener("click",()=>{
    if(check3.checked){
        service3.style.backgroundColor = "hsl(217, 100%, 97%)";
        service3.style.borderColor = "hsl(243, 100%, 62%)";
    }
    else{
        service3.style.backgroundColor = "";
        service3.style.borderColor = "";
    }
});
// end step 3 all

// step transfar value step 3 
let last_price_select1 = document.querySelector("#price_low_Lst");
let last_price_select2 = document.querySelector("#price_adv_Last");
let last_price_select3 = document.querySelector("#price_pro_Last");
let Last_select_M_Y = document.querySelectorAll(".Last_select_M_Y");
input_fuld.addEventListener("click",()=>{
    if(input_fuld.checked){
        for(let i=0; i<Last_select_M_Y.length; i++){
            Last_select_M_Y[i].innerHTML = "/yr"
        };
        last_price_select1.innerHTML = `10`
        last_price_select2.innerHTML = `20`
        last_price_select3.innerHTML = `20`
    }
    else{
        for(let i=0; i<Last_select_M_Y.length; i++){
            Last_select_M_Y[i].innerHTML = "/mo"
        };
        last_price_select1.innerHTML = `1`
        last_price_select2.innerHTML = `2`
        last_price_select3.innerHTML = `2`
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
// let pic_item_dash1 = document.querySelector(".create-pic-add-items1");
// let pic_item_dash2 = document.querySelector(".create-pic-add-items2");
// let pic_item_dash3 = document.querySelector(".create-pic-add-items3");

let pic_item_dash1 = document.querySelector(".Selected_last_amount1");
let pic_item_dash2 = document.querySelector(".Selected_last_amount2");
let pic_item_dash3 = document.querySelector(".Selected_last_amount3");
let dash_Item_name1 = document.querySelector(".add_item1");
let dash_Item_name2 = document.querySelector(".add_item2");
let dash_Item_name3 = document.querySelector(".add_item3");

let Last_M_Y = document.querySelector(".Last_M_Y1")
let Last_M_Y2 = document.querySelector(".Last_M_Y2")
let Last_M_Y3 = document.querySelector(".Last_M_Y3")

let dolar_sign = document.querySelector(".dolar_sign");
let dolar_sign2 = document.querySelector(".dolar_sign2");
let dolar_sign3 = document.querySelector(".dolar_sign3");



check1.addEventListener("click",()=>{
   if(check1.checked){
      pic_item_dash1.innerHTML = last_price_select1.innerHTML;
      dash_Item_name1.innerHTML = "Online service";
      Last_M_Y.style.display = "block";
      dolar_sign.style.display = "block";
   }
})
check2.addEventListener("click",()=>{
   if(check2.checked){
    pic_item_dash2.innerHTML = last_price_select2.innerHTML;
    dash_Item_name2.innerHTML = "Larger storage";
    Last_M_Y2.style.display = "block";
    dolar_sign2.style.display = "block";
   }
})
check3.addEventListener("click",()=>{
   if(check3.checked){
    pic_item_dash3.innerHTML = last_price_select3.innerHTML;
    dash_Item_name3.innerHTML = "Customizable Profile";
    Last_M_Y3.style.display = "block";
    dolar_sign3.style.display = "block";
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
let M_Y_biling_amount_adv = document.querySelector(".advence");
let M_Y_biling_amount_pro = document.querySelector(".pro");
let last_btn = document.querySelector(".next_btn4");
// select onece
let price_select_onece_low = document.querySelector(".price_lo");
let price_select_onece_adv = document.querySelector(".price_ad");
let price_select_onece_pro = document.querySelector(".price_pr");
last_btn.addEventListener("click",()=>{
    
})