let products = JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) : localStorage.setItem('products', JSON.stringify(
        [
            {
                "id": 1,
                "product": "Foundations",
                "brand": "Fentybeauty",
                "image": "https://i.postimg.cc/T3fvVqJ8/foundationsjpg-image-668x550.jpg",
                "price": "R600"
        
            },
            {
                "id":2,
                "product": "Concealers",
                "brand":"Mac",
                "image":"https://i.postimg.cc/prJqR8h8/IMG-0181.webp",
                "price": "R400"
            },
            {
                "id": 3,
                "product":"Bronzers",
                "brand":"Yardley",
                "image":"https://i.postimg.cc/k578PZNj/YAR-F122282-BLANK-1.jpg",
                "price": "R250"
            },
            {
                "id": 4,
                "product":"Highlighters",
                "brand":"Rimmel",
                "image":"https://i.postimg.cc/tJnpcqYL/THREE.jpg",
                "price": "R180"
            },
            {
                "id":5,
                "product":"Eyeshadows",
                "brand":"Esssence",
                "image":"https://i.postimg.cc/MG8GCQwq/8226-b567c3ee.jpg",
                "price": "R200"
            },
            {
                "id":6,
                "product":"Lipsticks",
                "brand":"Maybelline",
                "image":"https://i.postimg.cc/4dsQxy6T/711k-UW-3m6-L-AC-SL1200.jpg",
                "price": "R250"
            },
            {
                "id": 7,
                "product":"Pencils",
                "brand":"Rimmel",
                "image":"https://i.postimg.cc/wBvsfNQM/e90b0a0113eeb391a9cfac73bc3fffc9.jpg",
                "price": "R170"
            },
            {
                "id": 8,
                "product":"Lashes",
                "brand":"Hudabeauty",
                "image":"https://i.postimg.cc/9Fw47VFR/lashes.jpg",
                "price": "R100"
            },
            {
                "id": 9,
                "product":"Tools",
                "brand":"Sorbet",
                "image":"https://i.postimg.cc/5NXPQHCB/tools.jpg",
                "price": "R500"
            },
            {
                "id": 10,
                "product":"Removers",
                "brand":"Garnier",
                "image":"https://i.postimg.cc/L4nGK4Vb/remover.jpg",
                "price": "R280"
            }
    ]));

function showAdmin() {
    let trow = document.querySelector("tbody");
    trow.innerHTML = "";
    products.forEach((list) => {
        trow.innerHTML += `
        <tr class= "data">
        <td>${list.id} </td>
        <td>${list.product}</td>
        <td>${list.brand}</td>
        <td>${list.price}</td>
        <td>
        <button type="button" class="btn btn-primary mb-1" data-bs-toggle="modal" data-bs-target="#editInput">
        Edit
        </button>
        <div class="modal fade" id="editInput" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="editInput" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
        <h1 class="modal-title fs-5" id="edit">Edit</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form id="editForm">
        <h5 id="id" class="modal-title">Id</h5>
        <input type="text" class="form-control md-4" id="idInput"><h5 id="product" class="modal-title">Product</h5>
        <input type="text" class="form-control md-4" id="productInput"><h5 id="brand" class="modal-title">Brand</h5>
        <input type="text" class="form-control md-4" id="brandInput"><h5 id="price" class="modal-title">Price</h5><input type="text" class="form-control md-4" id="priceInput">
        </form></div>
        <div class="modal-footer"><button type="button" class="btn btn-primary" id="editInput" >Edit</button>
        </div></div></div></div>
        <td><button class ="btn btn-dark btn-sm float-center delete" id="deleteInput" onclick="">Delete</button></td>
        </tr>
        `;
    });
}
showAdmin();


let submit = document.getElementById('submit');
function addItem(){
    submit.addEventListener('click',(e)=> {
        e.preventDefault();
        let id = document.querySelector('#idInput').value;
        let product = document.querySelector('#productInput').value;
        let brand = document.querySelector('#brandInput').value;
        let price = document.querySelector('#priceInput').value;
    products.push ({
        id,
        product,
        brand,
        price
    })


    localStorage.setItem('products', JSON.stringify(products))

    showAdmin()
    })
}

let edit = document.querySelector('#editInput');
function editItem(){
    edit.addEventListener('click', (e) =>{
        let id = document.querySelector('#idInput').value;
        let product = document.querySelector('#productInput').value;
        let brand = document.querySelector('#brandInput').value;
        let price = document.querySelector('#priceInput').value;
        products.push ({
            id,
            product,
            brand,
            price
        })
        localStorage.setItem('products', JSON.stringify(products))
        showAdmin() 
    })
} 

function deleteItem(e){ 
    let id = document.querySelector('#idInput').value;
    let product = document.querySelector('#productInput').value;
    let brand = document.querySelector('#brandInput').value;
    let price = document.querySelector('#priceInput').value;
    let p = e.parentNode.parentNode.rowIndex;
    document.querySelector(".table").deleteRow(p);
    products.pop ({
        id,
        product,
        brand,
        price,
        p
    })
    localStorage.setItem('products',JSON.stringify(products))
}

// sort
function sortProduct (){
    products.sort((a, b) => {
        return a.product.toLowerCase() < b.product.toLowerCase() ? -1 : 1;
    })
    localStorage.setItem("products", JSON.stringify(products));
    showAdmin()
};

let sorting = document.getElementById('sort');
sorting.addEventListener('click',sortProduct);
