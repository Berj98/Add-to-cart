const product = [
    {
        id: 0,
        image: 'burger.png',
        title: "Cheese Burger",
        price: 1400,
    },
    {
        id: 1,
        image: 'Lasagne.png',
        title: "Lasagne",
        price: 2250,
    },
    {
        id: 2,
        image: 'Chicken-Shawarma.png',
        title: "Chicken Shawarma",
        price: 750,
    },
    {
        id: 3,
        image: 'chicken.png',
        title: "Chicken",
        price: 3500,
    },
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i = 0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    let {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>֏ ${price}</h2>`+
                "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
        </div>`
    )
}).join('')

let cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0;
    let total = 0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length == 0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "֏ "+0+"";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            let {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "֏ "+total+"";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>֏ ${price}</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }   
}