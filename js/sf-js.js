
window.onload=function () {
    $('#myTab a').on('mouseover', function (e) {
        e.preventDefault()
        var tab = this
        var preTab = e.relatedTarget
        // console.log("tab = ",$(tab),'e=',e)
        setTimeout(function(){
            $(tab).tab('show')
        }, 200);
      })
    
    // $('#myTab a').on('click', function (e) {
    // e.preventDefault()
    // $(this).tab('show')
    // })
}
