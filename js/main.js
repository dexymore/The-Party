$(document).ready(function(){
    $(".slidicon").click(function () {
  let boxwidth = $(".box").outerWidth();
  if ($(".slidebar").css("left") !== `0px`) {
    $(".slidebar").animate({ left: 0 }, 800);
  }
  if ($(".slidebar").css("left") === `0px`)
    $(".slidebar").animate({ left: `-${boxwidth}` }, 800);
});

$(".singerbundle").click(function () {
  let x = $(this).next();
  if (x.css("display") === "block") x.slideUp();
  else x.slideDown();
});

//////////////////////////////////////////////////

let countDownDate = new Date("Oct 27, 2022 16:37:52").getTime();

let myfunc = setInterval(function () {
  let now = new Date().getTime();
  let timeleft = countDownDate - now;

  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + "d ";
  document.getElementById("hours").innerHTML = hours + "h ";
  document.getElementById("mins").innerHTML = minutes + "m ";
  document.getElementById("secs").innerHTML = seconds + "s ";

  if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = "see";
    document.getElementById("hours").innerHTML = "u";
    document.getElementById("mins").innerHTML = "next";
    document.getElementById("secs").innerHTML = "party 😿";
    document.getElementById("end").innerHTML = "TIME UP!!";
  }
}, 1000);
/////////////////////////////////////////////////////////////////////////////////////

let txtarea=document.querySelector('#txtarea');
let lettersNum=document.querySelector('.lettersNum');
let extra=document.querySelector('.extra');
lettersNum.innerHTML=100;
txtarea.addEventListener('input',function(){

    let m =txtarea.value;
    let x=100;


     if(m.length<=100)
    {
        x=x-m.length
        lettersNum.innerHTML=x;
        extra.innerHTML="";
    }
    if(m.length>=100)
    {
        lettersNum.innerHTML=" your ";
        extra.innerHTML=' has finished 😢';

    }
})


$("a[href^='#']").click(function(){
    let link=$(this).attr('href');
console.log(link);
let linkOffset = $(link).offset().top;
$('html,body').animate({scrollTop:linkOffset},1200)
})



    $('#loading .lds-ellipsis').fadeOut(1000,function(){

        $('#loading').fadeOut(600,function(){
            $('#loading').remove();
            $('body').css('overflow','auto');
        })
    })
})

