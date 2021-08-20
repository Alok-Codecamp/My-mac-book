// function for cost

function updateCost(id, cost) {
  const price = document.getElementById(id);
  price.innerText = cost;
}

// function for add total
function total() {
  const extraMemoryCost =
    document.getElementById("extra-memory-cost").innerText;
  const extraMemoryCostValue = parseInt(extraMemoryCost);
  const extraStorageCost =
    document.getElementById("extra-storage-cost").innerText;
  const extraStorageCostValue = parseInt(extraStorageCost);
  const deliveryCharge = document.getElementById("delivery-charge").innerText;
  const deliveryChargeValue = parseInt(deliveryCharge);
  const totalPrice = document.getElementById("total-price");
  totalPrice.innerText =
    1299 + extraMemoryCostValue + extraStorageCostValue + deliveryChargeValue;
  const Total = document.getElementById("total");
  Total.innerText = totalPrice.innerText;
}

// function for apply button
function applyPromoCode() {
  let promoCode = document.getElementById("input-promo-code");
  const promoCodeText = promoCode.value;
  const code = "stevekaku";
  if (promoCodeText.toLowerCase() == code) {
    const TotalPrice = document.getElementById("total-price");
    const totalValue = TotalPrice.innerText;
    const totalValueNum = parseInt(totalValue);
    const priceReduced = (totalValueNum * 20) / 100;
    const total = document.getElementById("total");
    total.innerText = totalValueNum - priceReduced;
    promoCode.value = "";
  } else {
    console.log("your Promo code is not currect ");
    promoCode.value = "";
  }
}
// event for memory
document.getElementById("eight-gb").addEventListener("click", function () {
  updateCost("extra-memory-cost", 0);
  total();
});
document.getElementById("sixtin-gb").addEventListener("click", function () {
  updateCost("extra-memory-cost", 180);
  total();
});
// event for storage
document.getElementById("ssd256").addEventListener("click", function () {
  updateCost("extra-storage-cost", 0);
  total();
});
document.getElementById("ssd512").addEventListener("click", function () {
  updateCost("extra-storage-cost", 100);
  total();
});
document.getElementById("ssd1tb").addEventListener("click", function () {
  updateCost("extra-storage-cost", 180);
  total();
});

// event for delivery charge
document
  .getElementById("prime-delivery")
  .addEventListener("click", function () {
    updateCost("delivery-charge", 0);
    total();
  });
document.getElementById("with-charge").addEventListener("click", function () {
  updateCost("delivery-charge", 20);
  total();
});

// event for apply button

document.getElementById("apply").addEventListener("click", function () {
  applyPromoCode();
});
