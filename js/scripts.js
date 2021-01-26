function change_theme(){

    var light = './css/light.css';
    var dark = './css/dark.css';
    var page = document.getElementById('style');
    var pageatt = page.getAttribute('href');

    if (pageatt === dark){
        page.href=light;
    }else{
        page.href=dark;
    }
}

function show_loader(){
    var content = document.getElementById('content');
    content.style.display='none';
    document.getElementById('loader').style.display='flex';
    setTimeout(()=>{
        document.getElementById('loader').style.display='none';
        content.style.display='block';
    }, 4000)
}

function show_lang(){
    var element = document.getElementById('Lang');
    var element_att = element.getAttribute('style');
    if (element_att === "display: none;"){
        element.style.display='flex';
    }else{
        element.style.display='none';
    }
}