// عناصر الكارت
const cartSection = document.querySelector(".sidebar");
const cartCount = document.querySelector(".change"); 
const cartText = document.querySelector(".explain");
const cartImg = document.querySelector(".img");

// إنشاء ليستة لعرض العناصر
const cartItemsList = document.createElement("ol");
cartItemsList.classList.add("cart-items");
cartSection.appendChild(cartItemsList);

// مكان لإظهار المجموع
const totalPriceElement = document.createElement("p");
totalPriceElement.classList.add("total");
cartSection.appendChild(totalPriceElement);

// زرار كل المنتجات
const addToCartBtns = document.querySelectorAll(".btn");

// بيانات الكارت
let cart = [];
let total = 0;

// عند الضغط على أي زر Add to cart
addToCartBtns.forEach((btn) => {
btn.addEventListener("click", () => {
    // المنتج الحالي
    const productCard = btn.parentElement; 
    const name = productCard.querySelector(".content .name") 
            ? productCard.querySelector(".content .name").textContent.trim()
            : productCard.querySelector(".content span").textContent.trim();

    const priceText = productCard.querySelector(".price").textContent;
    const price = parseFloat(priceText.replace("$", ""));

    // إضافة المنتج
    cart.push({ name, price });

    // تحديث الكارت
    renderCart();
});
});

// دالة تحديث الكارت
function renderCart() {
  // تفريغ القديم
cartItemsList.innerHTML = "";
total = 0;

  // لو الكارت فاضي
if (cart.length === 0) {
    cartImg.style.display = "block";
    cartText.style.display = "block";
    totalPriceElement.textContent = "";
} else {
    cartImg.style.display = "none";
    cartText.style.display = "none";
}


cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsList.appendChild(li);
    total += item.price;
});

cartCount.textContent = `(${cart.length})`;


if (cart.length > 0) {
    totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
}
}


const clearCartBtn = document.querySelector(".clear-cart");

clearCartBtn.addEventListener("click", () => {
cart = [];         
total = 0;         
renderCart();                
});



































