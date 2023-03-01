let button = document.querySelector('.button');

let myForm = document.forms.myForm;
let input_text = myForm.elements.input_text;

let select = myForm.elements.select;

let fuel_checkbox_1 = myForm.elements.fuel_checkbox_1;
let fuel_checkbox_2 = myForm.elements.fuel_checkbox_2;
let fuel_checkbox_3 = myForm.elements.fuel_checkbox_3;
let fuel_checkbox_4 = myForm.elements.fuel_checkbox_4;

let cartipe_1 = myForm.elements.cartipe_1;
let cartipe_2 = myForm.elements.cartipe_2;

let owner_1 = myForm.elements.owner_1;
let owner_2 = myForm.elements.owner_2;

let payment_method_1 = myForm.elements.payment_method_1;
let payment_method_2 = myForm.elements.payment_method_2;
let payment_method_3 = myForm.elements.payment_method_3;

let price;


function buttonClik() {
    console.log(select.value);

    console.log(input_text.value);

    console.log(fuel_checkbox_1.checked); // true или false
    console.log(fuel_checkbox_2.checked); // true или false
    console.log(fuel_checkbox_3.checked); // true или false
    console.log(fuel_checkbox_4.checked); // true или false

    console.log(cartipe_1.checked); // true или false
    console.log(cartipe_2.checked); // true или false

    console.log(owner_1.checked); // true или false
    console.log(owner_2.checked); // true или false

    console.log(payment_method_1.checked); // true или false
    console.log(payment_method_2.checked); // true или false
    console.log(payment_method_3.checked); // true или false

    //марка
    if (select.value == 1) {
        price = 127000;
    }
    else if (select.value == 2) {
        price = 100000;
    }
    else if (select.value == 3) {
        price = 249000;
    }
    else if (select.value == 4) {
        price = 650000;
    }

    //тип топлива
    if (fuel_checkbox_1.checked == true) {
        price += 10000;
    }
    else if (fuel_checkbox_2.checked == true) {
        price += 17000;
    }
    else if (fuel_checkbox_3.checked == true) {
        price += 23000;
    }
    else if (fuel_checkbox_4.checked == true) {
        price += 25000;
    }

    //объем

    //новый или подержаный
    if (cartipe_1.checked == true) {
        price += 0;
    }
    else if (cartipe_2.checked == true) {
        price -= 70000;
    }

    //кол-во водителей
    if (owner_1.checked == true) {
        price -= 15000;
    }
    else if (owner_2.checked == true) {
        price -= 30000;
    }

    //способ оплаты
    if (payment_method_1.checked == true) {
        alert("К оплате картой: " + price);
    }
    else if (payment_method_2.checked == true) {
        alert("К оплате наличными: " + price);
    }
    else if (payment_method_3.checked == true) {
        alert("Счет: " + price);
    }
}
