var count = 0
function likeAction(){
    let myElement = document.querySelector("#like_count");
    console.log("You got a like!", myElement);
    count++;
    myElement.innerHTML = count;
    console.log(count);
}