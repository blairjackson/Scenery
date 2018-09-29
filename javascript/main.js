var clicked = "";


function menu_toggle(){

    document.getElementById("drop_down").style.display = document.getElementById("drop_down").style.display === '' ? 'none' : '';

}

function view_beach(){
    document.getElementById("change_video").src = "video/beach.mp4";
    clicked = "beach";
    reset_link();
    set_active();
}

function view_sky(){
    document.getElementById("change_video").src = "video/sky.mp4";
    clicked = "sky";
    reset_link();
    set_active();
}

function view_aquarium(){
    document.getElementById("change_video").src = "video/aqua.mp4";
    clicked = "aqua";
    reset_link();
    set_active();
}

function view_tree(){
    document.getElementById("change_video").src = "video/tree.mp4";
    clicked = "tree";
    reset_link();
    set_active();
}

function view_sunset(){
    document.getElementById("change_video").src = "video/sunset.mp4";
    clicked = "sunset";
    reset_link();
    set_active();
}

function set_active(){
    if(clicked == "beach"){
        document.getElementById("beach_link").style.color = "aqua";
    }
    else if(clicked == "sky"){
        document.getElementById("sky_link").style.color = "aqua";
    }
    else if(clicked == "aqua"){
        document.getElementById("aqua_link").style.color = "aqua";
    }
    else if(clicked == "tree"){
        document.getElementById("tree_link").style.color = "aqua";
    }
    else if(clicked == "sunset"){
        document.getElementById("sunset_link").style.color = "aqua";
    }

}

function reset_link(){
    document.getElementById("sunset_link").style.color = "black";
    document.getElementById("tree_link").style.color = "black";
    document.getElementById("aqua_link").style.color = "black";
    document.getElementById("sky_link").style.color = "black";
    document.getElementById("beach_link").style.color = "black";
}