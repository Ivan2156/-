const addToCartButtons = document.querySelectorAll('.btn');
const totalPriceField = document.querySelector('.total-price');
let totalPrice = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const price = parseFloat(this.getAttribute('data-price')); // Отримуємо вартість товару з атрибуту data-price

        const isAdded = this.classList.contains('added-to-cart');

        if (isAdded) {
            this.classList.remove('added-to-cart');
            this.textContent = 'Додати в кошик';
            this.style.backgroundColor = 'rgb(248, 168, 24)';
            this.style.color = '#fff';
            totalPrice -= price;
        } else {
            this.classList.add('added-to-cart');
            this.textContent = 'Видалити з кошика';
            this.style.backgroundColor = 'orange';
            this.style.color = '#000';
            totalPrice += price;
        }

        totalPrice = parseFloat(totalPrice.toFixed(2)); // Округлюємо загальну вартість до двох знаків після коми

        totalPriceField.textContent = `Загальна вартість: ${totalPrice} грн`;
    });
});
