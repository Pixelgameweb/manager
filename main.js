const price_Product = document.getElementById("Legend-price-product"); let currentNum_Prod = 0; price_Product.textContent = currentNum_Prod;
const price_Fertilizers = document.getElementById("Legend-price-Fertilizers"); let currentNum_fert = 0; price_Fertilizers.textContent = currentNum_fert;
const price_Plants = document.getElementById("Legend-price-Plants"); let currentNum_Pln = 0; price_Plants.textContent = currentNum_Pln;
const price_Auto = document.getElementById("Legend-price-Auto"); let currentNum_Auto = 0; price_Auto.textContent = currentNum_Auto;
const price_Electronic = document.getElementById("Legend-price-Electronic"); let currentNum_Elec = 0; price_Electronic.textContent = currentNum_Elec;
const price_Household = document.getElementById("Legend-price-Household"); let currentNum_HHold = 0; price_Household.textContent = currentNum_HHold;
const price_Drinks = document.getElementById("Legend-price-drinks"); let currentNum_Dr = 0; price_Drinks.textContent = currentNum_Dr;
const price_Sport = document.getElementById("Legend-price-sport"); let currentNum_Sport = 0; price_Sport.textContent = currentNum_Sport;
const price_Fastfood = document.getElementById("Legend-price-fastfood"); let currentNum_FastF = 0; price_Fastfood.textContent = currentNum_FastF
// UpPChart()
document.addEventListener('DOMContentLoaded', function () { //Обращаемся к документу и находим там DOMContentLoaded, и создаем там функцию 
    document.querySelector('.btn[name="addBtn"]').addEventListener('click', function (event) { // Обращаемся к документу и находим там кнопку с именем addBtn, обрабатываем функцию клика и создаем функцию
        event.preventDefault(); // Исключаем стандартные действия
        const nameInput = document.querySelector('input[name="name"]');//Создаем 3 константы: 1 nameInput, получает поле с именем 2 priceinput, получает поле с ценой 3 categoryInput получает категорию товара
        const priceInput = document.querySelector('input[name="price"]');
        const categorySelect = document.getElementById('selectCategory');
        addExpense(nameInput.value, categorySelect.options[categorySelect.selectedIndex].text, priceInput.value);// Присваиваем 3 созданным константам значения 
        nameInput.value = ''; // Очищаем после нажатия на кнопку 
        priceInput.value = '';// Очищаем после нажатия на кнопку 
        addPrice()
    })
})
function deleteExpense(element) { // Функция удаления категории 
    element.closest('.purcashes__item').remove(); // Обрабатывает удаление элемента '.purcashes__item' а также обновляет страницу после этого
}
function addExpense(name, category, price) {  // Создаем функцию addExpence (обращаемся к имени категории и цене)
    const tbody = document.getElementById('tbody'); // Создаем константу tbody
    const row = document.createElement('tr');// Создаем константу row которая будет обрабатывать событие добавления элемента tr на страницу
    row.classList.add('purcashes__item', 'purcashes__row');// Добавляем на страницу 2 tr с классами 'purcashes__item' и  'purcashes__row'
    row.setAttribute('data-category', category.toLowerCase());// Добавляем на страницу 2 tr с категориями 'data-category' и  'toLowerCase()'
    row.innerHTML = ` 
      <td class="purcashes__td">${name}</td>
      <td class="purcashes__td id = "category"><div id="Category">${category}</div></td>
      <td class="purcashes__td" id = "purcashes_price"><div id="Price">${price}</div></td>
      <td class="purcashes__td"><i class="purcashes__item-del fa-solid fa-xmark" onclick="deleteExpense(this)">*</i></td>`;
    tbody.appendChild(row); // Добавляем на страницу таблицу выше присваивается значение 
}
// Сверху идет основная часть
// Дальше идет моя писанина
function addPrice() {
    //Основа 2 функции
    const category_all = document.getElementById("Category");
    const price_all = document.getElementById("Price");
    if (category_all.textContent = "Продукты") {
        price_all.textContent = currentNum_Prod;
    } if (category_all.textContent = "ФастФуд") {
        price_all.textContent = currentNum_FastF;
    } if (category_all.textContent = "Спорт") {
        price_all.textContent = currentNum_Sport;
    } if (category_all.textContent = "Напитки") {
        price_all.textContent = currentNum_Dr;
    } if (category_all.textContent = "Бытовые") {
        price_all.textContent = currentNum_HHold;
    } if (category_all.textContent = "Электроннки") {
        price_all.textContent = currentNum_Elec;
    } if (category_all.textContent = "Автомобили") {
        price_all.textContent = currentNum_Auto;
    } if (category_all.textContent = "Растения") {
        price_all.textContent = currentNum_Pln;
    } if (category_all.textContent = "Удобрения") {
        price_all.textContent = currentNum_fert;
    } else {
        console.log("~")
    }
    console.log(currentNum_Prod);
    console.log(currentNum_FastF);
    console.log(currentNum_Sport);
    console.log(currentNum_Dr);
    console.log(currentNum_HHold);
    console.log(currentNum_Elec);
    console.log(currentNum_Auto);
    console.log(currentNum_Pln);
    console.log(currentNum_fert);
}

// function UpPChart() {
//     const category_all = document.getElementById("Category");
//     const price_all = document.getElementById("Price");
//     const pieChart = document.getElementById('pieChart');
//     pieChart.style.stroke = '#800000';
//     if (category_all >= 2) {
//         console.log("Успешно")
//     }
// }