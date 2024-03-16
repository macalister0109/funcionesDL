a="pink"
s="orange";
d="#87CEFA";
q="#572364";
w="gray";
e="brown";

const ele = document.getElementById("color5");
const ele1 = document.getElementById("color6");

document.addEventListener('keydown', function(event) {
    if(event.key === 'a'){
        ele.style.backgroundColor = a;
    }else if(event.key === 's'){
        ele.style.backgroundColor = s;
    }else if(event.key === 'd'){
        ele.style.backgroundColor = d;
    }else if(event.key === 'q'){
        ele1.style.backgroundColor = q;
    }else if(event.key === 'w'){
        ele1.style.backgroundColor = w;
    }else if(event.key === 'e'){
        ele1.style.backgroundColor = e;
    }
});

