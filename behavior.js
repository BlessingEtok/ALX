document.addEventListener("DOMContentLoaded", function( e ){
    alert("hello")

    const thumbnailElement = document.getElementById("smart_thumbnail")
    thumbnailElement.addEventListener("click", function (e) {
        // alert("I saw you click")
        // console.log( thumbnailElement.className )
        if( thumbnailElement.className === "" ){
            thumbnailElement.className = "small"
        } 
        else {
            thumbnailElement.className = ""
        }
    })
})