var parentB = document.getElementsByClassName("accessories__list__item__info");
console.log(parentB);

for(let i=0; i<parentB.length; i++){
    parentB[i].getElementsByTagName('div')[0].addEventListener('click', function fun(){
        var checkPhone = prompt("Enter your phone:");
        if(parseInt(checkPhone) == checkPhone){
            alert("Minh Phuong will contact you via phone number:" + checkPhone)
        }
    })
}