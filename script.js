
let step_2_input_select_1 = document.querySelector("#check-1");
let step_2_input_select_2 = document.querySelector("#check-2");
let step_2_input_select_3 = document.querySelector("#check-3");

// step 2
let toggle_button = document.querySelector(".toggle_btn");
let toggle_slider = document.querySelector(".toggle-slider");
let toggle_check_box = document.querySelector("#toggle_check");
// price step 2 month free
let month_free = document.querySelectorAll(".month_free");
// step 2 price
let L2_price_arcade = document.querySelector(".arcade_price");
let L2_price_advenced = document.querySelector(".advanced_price");
let L2_price_pro = document.querySelector(".pro_price");
let month_year = document.querySelectorAll(".month_year");
// pic price 
let pic_price_1 = document.querySelector(".pic-price-1");
let pic_price_2 = document.querySelector(".pic-price-2");
let pic_price_3 = document.querySelector(".pic-price-3");
// indicate month year
let indicate_month = document.querySelector(".indicate_monthly");
let indicate_yearly = document.querySelector(".indicate_yearly");
// pic price main
let pic_main_price_1 = document.querySelector(".pic-m-price-1");
let pic_main_price_2 = document.querySelector(".pic-m-price-2");
let pic_main_price_3 = document.querySelector(".pic-m-price-3");

toggle_button.addEventListener("click",()=>{
     if(toggle_check_box.checked){
        for(let i=0; i<month_free.length; i++){
           month_free[i].innerHTML = "2 month free";
        };
        for(let i=0; i<month_year.length; i++){
            month_year[i].innerHTML = "/yr";
        };
        L2_price_arcade.innerHTML = "90";
        L2_price_advenced.innerHTML = "120";
        L2_price_pro.innerHTML = "150";
        // pic price
        pic_main_price_1.innerHTML = "10";
        pic_main_price_2.innerHTML = "20";
        pic_main_price_3.innerHTML = "20";
        pic_price_1.innerHTML = "10";
        pic_price_2.innerHTML = "20";
        pic_price_3.innerHTML = "20";
        toggle_slider.style.transform = "translateX(20px)";
        indicate_yearly.style.color = "hsl(213, 96%, 18%)";
        indicate_month.style.color = "hsl(231, 11%, 63%)";
    }
    else{
        for(let i=0; i<month_free.length; i++){
            month_free[i].innerHTML = "";
        };
        for(let i=0; i<month_year.length; i++){
            month_year[i].innerHTML = "/mo";
        };
        L2_price_arcade.innerHTML = "9";
        L2_price_advenced.innerHTML = "12";
        L2_price_pro.innerHTML = "15";
        //pic price
        pic_main_price_1.innerHTML = "1";
        pic_main_price_2.innerHTML = "2";
        pic_main_price_3.innerHTML = "2";
        pic_price_1.innerHTML = "1";
        pic_price_2.innerHTML = "2";
        pic_price_3.innerHTML = "2";
        toggle_slider.style.transform = "translateX(0)";
        indicate_month.style.color = "hsl(213, 96%, 18%)";
        indicate_yearly.style.color = "hsl(231, 11%, 63%)";
        }
})
// transfer value step 2 to step end
let Last_plane_name = document.querySelector(".plane-name");
let Last_plane_price = document.querySelector(".plane_last_price");
let step_2_plane_name1 = document.querySelector(".step2_Arcade");
let step_2_plane_name2 = document.querySelector(".step2_Advanced");
let step_2_plane_name3 = document.querySelector(".step2_pro");

// let change_1 = L2_price_arcade.innerHTML;
// let change_2 = L2_price_advenced.innerHTML;
// let change_3 = L2_price_pro.innerHTML;

// step 3
let pic_select_1 = document.querySelector(".pic-select-1");
let pic_select_2 = document.querySelector(".pic-select-2");
let pic_select_3 = document.querySelector(".pic-select-3");
let pic_checkbox_1 = document.querySelector("#pic-checkbox-1");
let pic_checkbox_2 = document.querySelector("#pic-checkbox-2");
let pic_checkbox_3 = document.querySelector("#pic-checkbox-3");

// pic total in dashbord
let pic_total_Last1 = document.querySelector(".pic-total-1");
let pic_total_Last2 = document.querySelector(".pic-total-2");
let pic_total_Last3 = document.querySelector(".pic-total-3");

window.onload = ()=>{
    if(pic_checkbox_1.checked){
        pic_select_1.style.backgroundColor ="hsl(217, 100%, 97%)";
        pic_select_1.style.borderColor ="hsl(243, 100%, 62%)";
        pic_total_Last1.style.display = "flex";
    }
    else{
        pic_select_1.style.backgroundColor ="";
        pic_select_1.style.borderColor ="";
        pic_total_Last1.style.display = "none";
    };
    pic_main_price_1.innerHTML = "1";
    pic_main_price_2.innerHTML = "2";
    pic_main_price_3.innerHTML = "2";
};

pic_select_1.addEventListener("click",()=>{
    if(pic_checkbox_1.checked){
        pic_select_1.style.backgroundColor ="hsl(217, 100%, 97%)";
        pic_select_1.style.borderColor ="hsl(243, 100%, 62%)";
        pic_total_Last1.style.display = "flex";
    }
    else{
        pic_select_1.style.backgroundColor ="";
        pic_select_1.style.borderColor ="";
        pic_total_Last1.style.display = "none";
        
    }
});
pic_select_2.addEventListener("click",()=>{
    if(pic_checkbox_2.checked){
        pic_select_2.style.backgroundColor ="hsl(217, 100%, 97%)";
        pic_select_2.style.borderColor ="hsl(243, 100%, 62%)";
        pic_total_Last2.style.display = "flex";
    }
    else{
        pic_select_2.style.backgroundColor ="";
        pic_select_2.style.borderColor ="";
        pic_total_Last2.style.display = "none";
    }
});
pic_select_3.addEventListener("click",()=>{
    if(pic_checkbox_3.checked){
        pic_select_3.style.backgroundColor ="hsl(217, 100%, 97%)";
        pic_select_3.style.borderColor ="hsl(243, 100%, 62%)";
        pic_total_Last3.style.display = "flex";
    }
    else{
        pic_select_3.style.backgroundColor ="";
        pic_select_3.style.borderColor ="";
        pic_total_Last3.style.display = "none";
    }
});
// Indicator number 
let indicator_number_1 = document.querySelector(".indi-1");
let indicator_number_2 = document.querySelector(".indi-2");
let indicator_number_3 = document.querySelector(".indi-3");
let indicator_number_4 = document.querySelector(".indi-4");
// slide form
let next_btn_1 = document.querySelector(".btn1");
let next_btn_2 = document.querySelector(".btn2");
let next_btn_3 = document.querySelector(".btn3");
let next_btn_4 = document.querySelector(".btn4");
let prev_btn_1 = document.querySelector(".btn_prev_1");
let prev_btn_2 = document.querySelector(".btn_prev_2");
let prev_btn_3 = document.querySelector(".btn_prev_3");
let form1 = document.querySelector(".form_all_1");
let form2 = document.querySelector(".form_all_2");
let form3 = document.querySelector(".form_all_3");
let form4 = document.querySelector(".form_all_4");
let wellcome_page = document.querySelector(".wellcome-page");

let error1 = document.querySelector(".error1");
let error2 = document.querySelector(".error2");
let error3 = document.querySelector(".error3");
let input_all_1 = document.querySelector(".input_all_1");
let input_all_2 = document.querySelector(".input_all_2");
let input_all_3 = document.querySelector(".input_all_3");

// validation form personal information
    next_btn_1.addEventListener("click",()=>{
        let name = document.forms["myform_1"]["name"].value;
        let email = document.forms["myform_1"]["email"];
        let phone = document.forms["myform_1"]["phone"].value;
        if(name.length<1){
            error1.innerHTML = "*Input field required";
            input_all_1.style.border = "1px solid red";
        }
        if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            error2.innerHTML = "*Input field required";
            input_all_2.style.border = "1px solid red";
        }
        if(phone.length<4){
            error3.innerHTML = "*Input field required";
            input_all_3.style.border = "1px solid red";
        }
        if(name.length>1 && phone.length>4 && email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            form1.style.display = "none";
            form2.style.display = "block";
            indicator_number_1.classList.remove("active-indicator");
            indicator_number_2.classList.add("active-indicator");
        }
    });

next_btn_2.addEventListener("click",()=>{
    form2.style.display = "none";
    form3.style.display = "block";
    indicator_number_2.classList.remove("active-indicator");
    indicator_number_3.classList.add("active-indicator");
    if(step_2_input_select_1.checked){
        let price_ar_f = L2_price_arcade.innerHTML;
        Last_plane_price.innerHTML = price_ar_f;
    }
    if(step_2_input_select_2.checked){
        let price_adv_f = L2_price_advenced.innerHTML;
        Last_plane_price.innerHTML = price_adv_f;
    }
    if(step_2_input_select_3.checked){
        let price_pro_f = L2_price_pro.innerHTML;
        Last_plane_price.innerHTML = price_pro_f;
    }
});
next_btn_3.addEventListener("click",()=>{
    //last calculation
    //  convert string to number 
    let last_ar_ad_pro = parseInt(Last_plane_price.innerHTML);
    let last_pic_1 = parseInt(pic_price_1.innerHTML);
    let last_pic_2 = parseInt(pic_price_2.innerHTML);
    let last_pic_3 = parseInt(pic_price_3.innerHTML);
    let dashbord_total = document.querySelector(".price-all-total");
    form3.style.display = "none";
    form4.style.display = "block";
    indicator_number_3.classList.remove("active-indicator");
    indicator_number_4.classList.add("active-indicator");

    if(pic_checkbox_1.checked){
        let a = last_ar_ad_pro + last_pic_1;
        dashbord_total.innerHTML = a;
    }
    else if(pic_checkbox_2.checked){
        let a = last_ar_ad_pro + last_pic_2;
        dashbord_total.innerHTML = a;
    }
    else if(pic_checkbox_3.checked){
        let a = last_ar_ad_pro + last_pic_3;
        dashbord_total.innerHTML = a;
    }
    if(pic_checkbox_1.checked && pic_checkbox_2.checked){
        let a = last_ar_ad_pro + last_pic_1 + last_pic_2;
        dashbord_total.innerHTML = a;
    }
    if(pic_checkbox_1.checked && pic_checkbox_3.checked){
        let a = last_ar_ad_pro + last_pic_1 + last_pic_3;
        dashbord_total.innerHTML = a;
    }
    if(pic_checkbox_2.checked && pic_checkbox_3.checked){
        let a = last_ar_ad_pro + last_pic_2 + last_pic_3;
        dashbord_total.innerHTML = a;
    }
    if(pic_checkbox_1.checked && pic_checkbox_2.checked && pic_checkbox_3.checked){
        let a = last_ar_ad_pro + last_pic_1 + last_pic_2 + last_pic_3;
        dashbord_total.innerHTML = a;
    }
});
        
prev_btn_1.addEventListener("click",()=>{
    form2.style.display = "none";
    form1.style.display = "block";
    indicator_number_1.classList.add("active-indicator");
    indicator_number_2.classList.remove("active-indicator");
})
prev_btn_2.addEventListener("click",()=>{
    form3.style.display = "none";
    form2.style.display = "block";
    indicator_number_2.classList.add("active-indicator");
    indicator_number_3.classList.remove("active-indicator");
})
prev_btn_3.addEventListener("click",()=>{
    form4.style.display = "none";
    form3.style.display = "block";
    indicator_number_3.classList.add("active-indicator");
    indicator_number_4.classList.remove("active-indicator");
});
next_btn_4.addEventListener("click",()=>{
    form4.style.display = "none";
    wellcome_page.style.display = "flex";
})
let change_button = document.querySelector(".change_button");
change_button.addEventListener("click",()=>{
    form4.style.display = "none";
    form1.style.display = "block";
})