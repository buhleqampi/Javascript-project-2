let checkout = [];

let totalPrice = document.querySelector('#totalPrice');

totalPrice.addEventListener('click',(e)=>{
    e.preventDefault();
    let product = document.querySelector('#productInput').value;
    let price = document.querySelector('#priceInput').value;
    let quantity = document.querySelector('#quantityInput').value;
checkout.push({
    product,
    price,
    quantity
})
localStorage.setItem('data', JSON.stringify(checkout))
});

let removeCheckoutItem = document.querySelector('.btn-danger')
console.log(removeCheckoutItem)
for(let i =0;i < removeCheckoutItem.length;i++) {
    let button = removeCheckoutItem[i]
    button.addEventListerner('click',function (event){
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
        console.log('clicked')
    })
}

function updateCheckoutItem(){

}
