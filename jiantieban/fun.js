/**
 * Created by wb-zhangrui on 14-2-8.
 */
var fileUploadPreview = function (aFile)
{
    if (typeof FileReader == "undefined")
    {
        alert("浏览器不支持");
    }
    var i;
    for (i = 0; i < aFile.length; i++)
    {
        var tmp = aFile[i];
        var reader = new FileReader();
        reader.readAsDataURL(tmp);
        reader.onload = (function (f)
        {
            return function (e) {
                document.getElementById("spn_img").innerHTML += "<img src=\""+e.target.result+"\" title=\""+f.name+"\">";
            }
        })(tmp)
    }
};

var dropFile = function (e) {
    fileUploadPreview(e.dataTransfer.files);
    e.stopPropagation();
    e.preventDefault();
};

//实现图片的上传功能
window.onload = function(){


    var input = document.getElementById("demo_input");
    var result= document.getElementById("result");
    var spn_img = document.getElementById("spn_img");
    if ( typeof(FileReader) === 'undefined' )
    {
        result.innerHTML = "抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！";
        input.setAttribute( 'disabled','disabled' );
    }
    else {
        input.addEventListener( 'change',readFile,false );
    }
};
function readFile()
{
    var file;
    if(file!=this.files[0])
    {file=this.files[0];}

    //var file = this.files[0];
    //这里我们判断下类型如果不是图片就返回 去掉就可以上传任意文件
    if(!/image\/\w+/.test(file.type))
    {
        alert("请确保文件为图像类型");
        return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e)
    {
        spn_img.innerHTML = '<img src="'+this.result+'" alt=""/>';
    };
    return this.result;
}



//图片的复制和粘贴

//document.getElementById("spn_img").focus();
document.body.addEventListener("paste", function(e)
{
    for (var i = 0; i < e.clipboardData.items.length; i++)
    {
        if (e.clipboardData.items[i].kind == "file" && e.clipboardData.items[i].type == "image/png")
        {
            // get the blob
            var imageFile = e.clipboardData.items[i].getAsFile();

            // read the blob as a data URL
            var fileReader = new FileReader();
            fileReader.onloadend = function(e)
            {
                // create an image
                var image = document.createElement("IMG");
                image.src = this.result;

                // insert the image
                var range = window.getSelection().getRangeAt(0);
                range.insertNode(image);
                range.collapse(false);

                // set the selection to after the image
                var selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
            };
            // TODO: Error Handling!
            // fileReader.onerror = ...
            fileReader.readAsDataURL(imageFile);
            // prevent the default paste action
            e.preventDefault();
            // only paste 1 image at a time
            break;
        }
    }
});
