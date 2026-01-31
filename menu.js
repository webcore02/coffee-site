let nav_coffee = document.getElementById("nav-coffee");
let nav_drinks = document.getElementById("nav-drinks");
let nav_desserts = document.getElementById("nav-desserts");
let nav_snacks = document.getElementById("nav-snacks");

// Получаем позиции
one_position = document.querySelector(".one");
two_position = document.querySelector(".two");
three_position = document.querySelector(".three");
four_position = document.querySelector(".four");





window.onload = nav_coffee.classList.add("click-button");

function showCoffee() {
    // удаляем классы, чтобы присвоить новые
    nav_coffee.classList.remove("click-button", "not-click-button");
    nav_drinks.classList.remove("click-button", "not-click-button");
    nav_desserts.classList.remove("click-button", "not-click-button");
    nav_snacks.classList.remove("click-button", "not-click-button");



    // тень на навигации
    nav_coffee.classList.add("click-button");
    nav_drinks.classList.add("not-click-button");
    nav_desserts.classList.add("not-click-button");
    nav_snacks.classList.add("not-click-button");


    // позиции
    one_position.querySelector("h3").innerHTML = "Капучино";
    one_position.querySelector("p").innerHTML = "Кофейный напиток итальянской кухни на основе эспрессо с добавлением вспененного молока";
    one_position.querySelector("img").src = "images/menu/Капучино.jpg";

    two_position.querySelector("h3").innerHTML = "Латте";
    two_position.querySelector("p").innerHTML = "Кофейный напиток на основе эспрессо и большого количества вспененного молока";
    two_position.querySelector("img").src = "images/menu/Латте.jpg";

    three_position.querySelector("h3").innerHTML = "Американо";
    three_position.querySelector("p").innerHTML = "Напиток на основе эспрессо, разбавленный горячей водой";
    three_position.querySelector("img").src = "images/menu/Американо.jpg";

    four_position.querySelector("h3").innerHTML = "Раф";
    four_position.querySelector("p").innerHTML = "Кофейный напиток, в котором все ингредиенты взбиваются вместе до воздушной консистенции";
    four_position.querySelector("img").src = "images/menu/Раф.jpg";

}

function showDrinks() {
    // удаляем классы, чтобы присвоить новые
    nav_coffee.classList.remove("click-button", "not-click-button");
    nav_drinks.classList.remove("click-button", "not-click-button");
    nav_desserts.classList.remove("click-button", "not-click-button");
    nav_snacks.classList.remove("click-button", "not-click-button");



    // тень на навигации
    nav_coffee.classList.add("not-click-button");
    nav_drinks.classList.add("click-button");
    nav_desserts.classList.add("not-click-button");
    nav_snacks.classList.add("not-click-button");


    // позиции
    one_position.querySelector("h3").innerHTML = "Лимонад";
    one_position.querySelector("p").innerHTML = "Кисло-сладкий напиток, изготавливается из плодов лимона, воды и дополнительных ингредиентов";
    one_position.querySelector("img").src = "images/menu/Лимонад.jpg";

    two_position.querySelector("h3").innerHTML = "Виноградный смузи";
    two_position.querySelector("p").innerHTML = "Лёгкий и освежающий напиток с кисло-сладким насыщенным вкусом";
    two_position.querySelector("img").src = "images/menu/Смузи.jpg";

    three_position.querySelector("h3").innerHTML = "Яблочный сок";
    three_position.querySelector("p").innerHTML = "Сок, выжатый из яблок, обладает сладким вкусом из-за содержания натурального сахара";
    three_position.querySelector("img").src = "images/menu/Яблочный сок.jpg";

    four_position.querySelector("h3").innerHTML = "Чай";
    four_position.querySelector("p").innerHTML = "Напиток из специально обработанных и заваренных листьев одноимённого растения";
    four_position.querySelector("img").src = "images/menu/Чай.jpg";

}

function showDesserts() {
    // удаляем классы, чтобы присвоить новые
    nav_coffee.classList.remove("click-button", "not-click-button");
    nav_drinks.classList.remove("click-button", "not-click-button");
    nav_desserts.classList.remove("click-button", "not-click-button");
    nav_snacks.classList.remove("click-button", "not-click-button");




    // тень на навигации
    nav_coffee.classList.add("not-click-button");
    nav_drinks.classList.add("not-click-button");
    nav_desserts.classList.add("click-button");
    nav_snacks.classList.add("not-click-button");


    // позиции
    one_position.querySelector("h3").innerHTML = "Чизкейк";
    one_position.querySelector("p").innerHTML = "Блюдо, представляющее собой сыросодержащий десерт от творожной запеканки до суфле";
    one_position.querySelector("img").src = "images/menu/Чизкейк.jpg";

    two_position.querySelector("h3").innerHTML = "Тирамису";
    two_position.querySelector("p").innerHTML = "Итальянский десерт из бисквита, пропитанного эспрессо и ликёром, с начинкой из сыра маскарпоне";
    two_position.querySelector("img").src = "images/menu/Тирамису.jpg";

    three_position.querySelector("h3").innerHTML = "Круассан";
    three_position.querySelector("p").innerHTML = "Небольшое мучное кондитерское изделие, булочка в форме полумесяца (рогалика) из слоёного теста";
    three_position.querySelector("img").src = "images/menu/Круассан.jpg";

    four_position.querySelector("h3").innerHTML = "Мороженое";
    four_position.querySelector("p").innerHTML = "Продукт-десерт, представляющий собой замороженную в процессе непрерывного взбивания массу";
    four_position.querySelector("img").src = "images/menu/Мороженое.jpg";

}

function showSnacks() {
    // удаляем классы, чтобы присвоить новые
    nav_coffee.classList.remove("click-button", "not-click-button");
    nav_drinks.classList.remove("click-button", "not-click-button");
    nav_desserts.classList.remove("click-button", "not-click-button");
    nav_snacks.classList.remove("click-button", "not-click-button");




    // тень на навигации
    nav_coffee.classList.add("not-click-button");
    nav_drinks.classList.add("not-click-button");
    nav_desserts.classList.add("not-click-button");
    nav_snacks.classList.add("click-button");


    // позиции
    one_position.querySelector("h3").innerHTML = "Оладьи";
    one_position.querySelector("p").innerHTML = "Пышные лепёшки из теста, которые жарят на сковороде в небольшом количестве масла";
    one_position.querySelector("img").src = "images/menu/Оладьи.jpg";

    two_position.querySelector("h3").innerHTML = "Салат Цезарь";
    two_position.querySelector("p").innerHTML = "Овощной салат, который содержит в себе пшеничные гренки, листья салата ромэн и тёртый пармезан";
    two_position.querySelector("img").src = "images/menu/Цезарь.jpg";

    three_position.querySelector("h3").innerHTML = "Хинкали";
    three_position.querySelector("p").innerHTML = "Блюдо грузинской кухни, представляющее собой «мешочки» из теста с начинкой";
    three_position.querySelector("img").src = "images/menu/Хинкали.jpg";

    four_position.querySelector("h3").innerHTML = "Бургер";
    four_position.querySelector("p").innerHTML = "Закрытый бутерброд, состоящий из круглой булочки, начинки из разогретой плоской котлеты, соуса и овощей";
    four_position.querySelector("img").src = "images/menu/Бургер.jpg";

}


