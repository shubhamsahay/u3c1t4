//store the products array in localstorage as "data"
function nike(b,n,p,i){
    this.brand=b;
    this.name=n;
    this.price=p;
    this.image=i;
}

function datat(e){
    e.preventDefault();
    let form=document.getElementById("product_form");
    let brand=form.product_brand.value;
    let name=form.product_name.value;
    let price=form.product_price.value;
    let image=form.product_image.value;
    // console.log(brand,name,price,image)
    let d1=new nike(brand,name,price,image)
    let data=JSON.parse(localStorage.getItem("data"))||[];
    data.push(d1);
    localStorage.setItem("data",JSON.stringify(data));
    document.getElementById("product_form").reset();
    
}
// <form id="product_form" onsubmit="datat(event)">
//         <input type="text" id="product_brand" placeholder="">
//         <input type="text" id="product_name" placeholder="">
//         <input type="text" id="product_price" placeholder="">
//         <input type="text" id="product_image" placeholder="">
//         <!-- <input type="text" id="" placeholder=""> -->
//         <input type="submit" id="submit"/>
