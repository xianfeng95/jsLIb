//获取鼠标到某个元素左上角的相对坐标
function pointTo(element, e) {
    var elementBox = element.getBoundingClientRect();
    return {
        x: e.clientX - elementBox.left,
        y: e.clientY - elementBox.top
    };
}

//计算元素左上角的坐标
function startPoint(element){
    var x = 0,y = 0;
    while(element != null) {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    }
    return {
        x: x,
        y: y
    }
}