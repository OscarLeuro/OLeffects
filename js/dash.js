var img = document.querySelectorAll('.olImage')[0];

var btn_menu = document.querySelectorAll('.olMenu_icon')[0];
var menu = document.querySelectorAll('.olMenu')[0];


btn_menu.addEventListener('click', function(){


    menu.style.transform = 'translateX(0%)';



})




window.addEventListener('scroll', function(){

    menu.style.transform = 'translateX(-100%)';

    var left = img.getBoundingClientRect().left

    console.log(this.window.innerWidth)
    console.log(left)

    if (left <= 400){

        img.style.transform = 'scale(1)'

    }

    if (left >= 400){

        img.style.transform = 'scale(0.5)'

    }
 

})

