// var sidenav=document.getElementById("sidenav")
// var menuicon=document.getElementById("menuicon")
// var closenav=document.getElementById("closenav")

// menuicon.addEventListener("click",function(){
//     sidenav.style.right=0
// })

// closenav.addEventListener("click",function(){
//     sidenav.style.right="-50%"
// })

var searchProduct = document.getElementById("productsearch")
var productContainer = document.getElementById("productcontainer")
var productList = productContainer.querySelectorAll("div")

searchProduct.addEventListener("keyup",function(    ){

    var enteredValue=event.target.value.toUpperCase()
    
    for(count=0;count<productList.length;count++){

        var productname = productList[count].querySelector("h3").textContent

        if(productname.toUpperCase().indexOf(enteredValue)>=0){

            productList[count].style.display = "block"   
        } else{
        productList[count].style.display = "none" 
    }
    }
   
})