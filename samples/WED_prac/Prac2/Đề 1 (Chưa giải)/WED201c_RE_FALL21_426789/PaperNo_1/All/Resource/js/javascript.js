var test = document.getElementsByClassName(
    'accessories__list__item__info'
);
// console.log(test)

for(let i=0; i<test.length; i++){
    test[i].getElementsByTagName("div")[0]
    .addEventListener("click",function(){
        var checkInt = prompt("Enter your phone:");
        if(parseInt(checkInt) == checkInt){
            alert("Minh Phuong store will contact you via: " + checkInt)
        } 
    })
}