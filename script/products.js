let checkout = [];
function addToCheckout(list) {
    checkout.push(list);
    localStorage.setItem('checkout', JSON.stringify(checkout));
}
let products = JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) : localStorage.setItem('products', JSON.stringify(
    [
        {
            "id": 1,
            "product": "Foundations",
            "brand": "Fentybeauty",
            "image": "https://i.postimg.cc/T3fvVqJ8/foundationsjpg-image-668x550.jpg",
            "price": "R600,00"
    
        },
        {
            "id":2,
            "product": "Concealers",
            "brand":"Mac",
            "image":"https://i.postimg.cc/prJqR8h8/IMG-0181.webp",
            "price": "R400,00"
        },
        {
            "id": 3,
            "product":"Bronzers",
            "brand":"Yardley",
            "image":"https://i.postimg.cc/k578PZNj/YAR-F122282-BLANK-1.jpg",
            "price": "R250,00"
        },
        {
            "id": 4,
            "product":"Highlighters",
            "brand":"Rimmel",
            "image":"https://i.postimg.cc/tJnpcqYL/THREE.jpg",
            "price": "R180,00"
        },
        {
            "id":5,
            "product":"Eyeshadows",
            "brand":"Esssence",
            "image":"https://i.postimg.cc/MG8GCQwq/8226-b567c3ee.jpg",
            "price": "R200,00"
        },
        {
            "id":6,
            "product":"Lipsticks",
            "brand":"Maybelline",
            "image":"https://i.postimg.cc/4dsQxy6T/711k-UW-3m6-L-AC-SL1200.jpg",
            "price": "R250,00"
        },
        {
            "id": 7,
            "product":"Pencils",
            "brand":"Rimmel",
            "image":"https://i.postimg.cc/wBvsfNQM/e90b0a0113eeb391a9cfac73bc3fffc9.jpg",
            "price": "R170,00"
        },
        {
            "id": 8,
            "product":"Lashes",
            "brand":"Hudabeauty",
            "image":"https://i.postimg.cc/9Fw47VFR/lashes.jpg",
            "price": "R100,00"
        },
        {
            "id": 9,
            "product":"Tools",
            "brand":"Sorbet",
            "image":"https://i.postimg.cc/5NXPQHCB/tools.jpg",
            "price": "R500,00"
        },
        {
            "id": 10,
            "product":"Removers",
            "brand":"Garnier",
            "image":"https://i.postimg.cc/L4nGK4Vb/remover.jpg",
            "price": "R280,00"
        }
]));

function showProducts() {
    document.querySelector("#products").innerHTML = " ";
    products.forEach((product) => {
        document.querySelector("#products").innerHTML += `
        <div class="card" style="width:200px","height:100px">
        <img src="${product.image}" style="width:196px"/>
        <h5>${product.product}</h5>
        <div>${product.brand}</div>
        <div>${product.price}</div>
        <button onclick='addToCheckout(${addToCheckout(product.id)})' id = "checkoutInput" class ="btn btn-primary">Add to checkout</button>
        </div>
        `
    });
}
showProducts();
