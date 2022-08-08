// let add = (id, e) => {
    


//     let selectedItem = id;
//     let selectedItemNext = selectedItem.item 

    
    

//     let search = basket.find((x)=> x.id === selectedItem);
//     // console.log('This is the selected item id',selectedItem)

//     if (search === undefined){
//         basket.push({
//             id: selectedItem,
//             item: 1,
//         });
    
// } else {
//     search.item += 1;
    
    
// }  
//     console.log(basket);
//     // update(selectedItem);
// };


// let pushToCart = (e) =>{
//     let selectedImage = document.getElementById("savedProduct");
//     console.log(selectedImage)


//     selectedImage.src = e.target.src;
//     console.log('The image new source', selectedImage)

//     cartArray.push(selectedImage);
//     console.log('Cart',cartArray)
// }


let add = (id, e) => {
    
pushToCart(e.target.src);
const element = document.getElementById("lap");
	element.appendChild(para);
    

}

let cartArray = [];
let pushToCart = (...product) =>{
    // pushToCart(e.target.src);
    // selectedImage.src = e.target.src;

    cartArray.push(product);
    console.log('Cart',cartArray)
}

  let x = pushToCart.bind(lap);
    document.getElementById("lap").display = x();
    
    // let savedImage = document.getElementById("savedProduct");
    // console.log(savedImage)
    // savedImage.src = cartArray.map((item) =>{
    
    //         console.log(item)
    // })
// window.addEventListener('onload', add() );

// pushToCart(e.target.src);

