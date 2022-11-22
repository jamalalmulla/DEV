
function createImage(){

    let width = document.querySelector('.width').value;
    let height = document.querySelector('.height').value;
   
    let img = document.createElement('img');
    imageSource ="https://source.unsplash.com/random/"
        img.src= `${imageSource}${width}x${height}`;
    
    document.querySelector('.image').append(img); 

}
document.getElementById('randomize').addEventListener('click',createImage);
