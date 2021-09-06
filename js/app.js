const minusBtn = document.querySelectorAll('.minus');
const plusBtn = document.querySelectorAll('.plus');

minusBtn.forEach(btn => {
  btn.addEventListener('click', function () {
    const content = this.closest('.product-quantity');
    const quantityField = content.querySelector('.quantity');
    const footer = this.closest('footer');
    const priceField = footer.querySelector('.cost');

    if (quantityField.dataset.qt > 0) {
      quantityField.dataset.qt--;
      quantityField.textContent = quantityField.dataset.qt;
    }
    let totalPrice = quantityField.dataset.qt * quantityField.dataset.price;
    priceField.textContent = `$${totalPrice}`;
  });
});

plusBtn.forEach(btn => {
  btn.addEventListener('click', function () {
    const content = this.closest('.product-quantity');
    const quantityField = content.querySelector('.quantity');
    const footer = this.closest('footer');
    const priceField = footer.querySelector('.cost');

    quantityField.dataset.qt++;
    quantityField.textContent = quantityField.dataset.qt;

    let totalPrice = quantityField.dataset.qt * quantityField.dataset.price;
    priceField.textContent = `$${totalPrice}`;
  });
});
