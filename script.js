window.onload = function() {
    // Получаем модель мотоцикла из параметров URL
    const urlParams = new URLSearchParams(window.location.search);
    const model = urlParams.get('model');
    
    const productName = document.getElementById("product-name");
    const productImage = document.getElementById("product-image");
    const productPrice = document.getElementById("product-price");
    const productSpecs = document.getElementById("product-specs");

    // Настройка данных для каждого мотоцикла
    let productDetails = {};

    if (model === "YZF-R1") {
        productDetails = {
            name: "Yamaha YZF-R1",
            image: "motorcycle1.jpg",
            price: "700 000 ₽",
            specs: [
                "Двигатель: 998 см³, 200 л.с.",
                "Макс. скорость: 299 км/ч",
                "Тип трансмиссии: 6-ступенчатая",
                "Вес: 199 кг"
            ]
        };
    } else if (model === "Ninja-ZX-10R") {
        productDetails = {
            name: "Kawasaki Ninja ZX-10R",
            image: "motorcycle2.jpg",
            price: "850 000 ₽",
            specs: [
                "Двигатель: 998 см³, 203 л.с.",
                "Макс. скорость: 305 км/ч",
                "Тип трансмиссии: 6-ступенчатая",
                "Вес: 207 кг"
            ]
        };
    } else if (model === "CBR1000RR") {
        productDetails = {
            name: "Honda CBR1000RR",
            image: "motorcycle3.jpg",
            price: "750 000 ₽",
            specs: [
                "Двигатель: 999 см³, 190 л.с.",
                "Макс. скорость: 290 км/ч",
                "Тип трансмиссии: 6-ступенчатая",
                "Вес: 195 кг"
            ]
        };
    } else if (model === "Ducati-Panigale-V4") {
        productDetails = {
            name: "Ducati Panigale V4",
            image: "motorcycle4.jpg",
            price: "1 500 000 ₽",
            specs: [
                "Двигатель: 1103 см³, 214 л.с.",
                "Макс. скорость: 305 км/ч",
                "Тип трансмиссии: 6-ступенчатая",
                "Вес: 174 кг"
            ]
        };
    } else if (model === "Dodge-Tomahawk") {
        productDetails = {
            name: "Dodge Tomahawk",
            image: "motorcycle5.jpg",
            price: "12 000 000 ₽",
            specs: [
                "Двигатель: 8290 см³, 500 л.с.",
                "Макс. скорость: 563 км/ч",
                "Тип трансмиссии: 6-ступенчатая",
                "Вес: 680 кг"
            ]
        };
    }

    // Заполнение данных на странице
    productName.textContent = productDetails.name;
    productImage.src = productDetails.image;
    productPrice.textContent = `Цена: ${productDetails.price}`;
    
    // Отображение характеристик
    productSpecs.innerHTML = "";
    productDetails.specs.forEach(spec => {
        const li = document.createElement("li");
        li.textContent = spec;
        productSpecs.appendChild(li);
    });
};
