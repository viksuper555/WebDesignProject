function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#preview').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

$("#image-control").change(function(){
    var img = document.getElementById("preview");
    img.style.display = "inline";
    readURL(this);
});