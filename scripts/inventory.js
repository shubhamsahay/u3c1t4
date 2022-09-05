function append(){
    let data=JSON.parse(localStorage.getItem("data"))||[];
    let all_pro=document.getElementById("products_data");
    products_data.innerHTML=null;

    data.forEach(function(el,index){
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;

        let p=document.createElement("p");
        p.innerText=el.brand;

        let p1=document.createElement("p");
        p1.innerText=el.name;

        let p2=document.createElement("p");
        p2.innerText=el.price;

       let btn=document.createElement("button");
       btn.id='remove_product';
       btn.innerText="Remove";
       btn.addEventListener('click',function(){
        remove(index);
       });
       div.append(img,p,p1,p2,btn);
       products_data.append(div);

    });

}

append();

function remove(index){
    let data=JSON.parse(localStorage.getItem("data"))||[];
    let newData=data.filter(function(el,i){
        if(i==index){
            let data2=JSON.parse(localStorage.getItem(data))||[];
            data2.push(el);
            localStorage.setItem('data2',JSON.stringify(data2));
        }else{
            return  i!=index;
        }
    });
    localStorage.setItem('data',JSON.stringify(newData));
    append();
    
}

// function nike(b,n,p,i){
//     this.brand=b;
//     this.name=n;
//     this.price=p;
//     this.image=i;
// }

// function datat(e){
//     e.preventDefault();
//     let form=document.getElementById("product_form");
//     let brand=form.product_brand.value;
//     let name=form.product_name.value;
//     let price=form.product_price.value;
//     let image=form.product_image.value;
//     // console.log(brand,name,price,image)
//     let d1=new nike(brand,name,price,image)
//     let data=JSON.parse(localStorage.getItem("product_form"))||[];
//     data.push(d1);
//     localStorage.setItem("product_form",JSON.stringify(data));
    
// }