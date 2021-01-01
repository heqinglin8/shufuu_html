
window.onload=function () {
    var isEnter = false;  //全局变量
    //mouseenter
    $('#myTab a').on('mouseenter', function (e) {
        e.preventDefault()
        if(isEnter){
           return; 
        }
        isEnter = true;
        $(this).tab('show')
        
        setTimeout(function(){
            isEnter = false;
        }, 150);
      })



    $('#newsTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
    })
}
