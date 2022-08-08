function myFunction() {
	document.documentElement.scrollBehavior="smoothscroll"
}

let lap = document.getElementById("lap");

let lapItemsData = [
{
    id: 1,
    img: "./image/lap.jpg",
},
{
    id: 2,
    img: "./image/lap1.jpg",
},
{
    id: 3,
    img: "./image/lap2.jpg",
},
{
    id: 4,
    img: "./image/lap3.jpg",
},
{
    id: 5,
    img: "./image/lap4.jpg",
},
{
    id: 6,
    img: "./image/lap5.jpg",
},
];


let basket = [];

let generateLap = () => {
    return (lap.innerHTML = lapItemsData
        .map((x) => {
            let {id, img} = x;
        return `
        <div id=product-id-${id} class="lap">
		<img src=${img} onclick="add(${id}, event)">
	</div>
    `;
    }).join(""));   
};

generateLap();

let add = (id, e) => {
    
pushToCart(e.target.src);
// selectedImage.src = e.target.src;


    let selectedItem = id;
    // let selectedItemNext = selectedItem.item 

    let search = basket.find((x)=> x.id === selectedItem);
    // console.log('This is the selected item id',selectedItem)

    if (search === undefined){
        basket.push({
            id: selectedItem,
            item: 1,
        });
    
} else {
    search.item += 1;
}  

localStorage.setItem("data", JSON.stringify(basket));

    console.log(basket);
    update(selectedItem);
};

let update = (id) => {
    let search = basket.filter((x) => x.id === id)
    // console.log(search);

    let cartNumber = document.getElementById('savedAmount')
    console.log(cartNumber)

    search.filter((obj) => {
        console.log(`No of products, ${obj.id}`)
        cartNumber.innerHTML = `${obj.id}`;
    })
    // document.getElementById(savedAmount).innerHTML = search.item;

    // cartNumber.innerHTML = search.item;
    // console.log(cartNumber)
    // update(id);
};

let cartArray = [];

 let pushToCart = (...product) =>{
    cartArray.push(product);
    console.log('Cart',cartArray)
}


// let saving = (savedAmount) => {
//     let savedIcon = document.getElementById("savedAmount");
//     savedIcon.innerHTML = basket.map((x)=x.item).reduce((x,y) => x+y, 0);
    
// };

// Cart page

// let savedImage = document.getElementById("savedProduct");
// console.log(savedImage)
    // savedImage.src = cartArray.map((item) =>{
    
    //     console.log(item)
    // })





