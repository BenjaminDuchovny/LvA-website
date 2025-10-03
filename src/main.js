var images = ["./images/LVA1.png", "./images/LVA2.png", "./images/reCAPTCHA.png", "./images/Duolingo.png"];
var count = 0;
function counter(i)
{
    count+=i;
    if(count < 0)
        count = 3;
    else if (count >= images.length)
        count = 0;
    document.getElementById('pic1').src=images[count];
}




