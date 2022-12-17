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
    localStorage.setItem('data', JSON.stringify(checkout))
}

function updateCheckoutItem(){
    let checkoutItem = document.getElementsByClassName('cart-items')[0]
    let checkoutRows = checkoutItem.getElementsByClassName('cart-row')
    for(let i=0; i < checkoutRows.length; i++) {
        let checkoutRow = checkoutRows[i]
    }
    localStorage.setItem('data', JSON.stringify(checkout))
} 
