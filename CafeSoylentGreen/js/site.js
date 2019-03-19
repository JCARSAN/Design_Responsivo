const menuDropDown = document.getElementById('menu-dropdow');
const dropdowContent = document.getElementById('menu-dropdown-content');
const body = document.getElementById('app');

body.onclick = function(event){
    //console.log('Evento ontouchstart');
    //console.log(event);
    if(event.target.className !== 'menu-dropdow'){
        if(dropdowContent.style.display === 'block'){
            dropdowContent.style.display = 'none';   
        }
    }else{
        if((dropdowContent.style.display === '') ||(dropdowContent.style.display === 'none')){
            dropdowContent.style.display = 'block';   
        }else{
            dropdowContent.style.display = 'none';
        } 
    }
}

menuDropDown.onmouseleave = function(){
    if(dropdowContent.style.display === 'block'){
       dropdowContent.style.display = 'none';   
    }
}