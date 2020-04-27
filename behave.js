for (var i = 0; i <document.querySelectorAll(".drum").length; i++)
{
	document.querySelectorAll(".drum")[i].addEventListener("click",function()
	{
		buttonAnimation(this.innerHTML);
		audPlay(this.innerHTML);
	})
}
function audPlay(a)
{
	switch(a)
		{
			case "w":
				var audio=new Audio("sounds/tom-1.mp3")
				audio.play();
			break;
			
			case "a":
				var audio=new Audio("sounds/tom-2.mp3")
				audio.play();
			break;
			
			case "s":
				var audio=new Audio("sounds/tom-3.mp3")
				audio.play();
			break;
			
			case "d":
		
				var audio=new Audio("sounds/tom-4.mp3")
				audio.play();
			break;
			
			case "j":
				var audio=new Audio("sounds/snare.mp3")
				audio.play();
			break;
			case "k":
				var audio=new Audio("sounds/kick-bass.mp3")
				audio.play();
			break;
			
			case "l":
				var audio=new Audio("sounds/crash.mp3")
				audio.play();
			break;

			default:
				alert("You have pressed wrong keys");
				break;
		}
}
function buttonAnimation(a)
{
	document.querySelector("."+a).classList.add("pressed");
	setTimeout(function(){document.querySelector("."+a).classList.remove("pressed");},100);
}
document.addEventListener("keydown",function(event)
{
	buttonAnimation(event.key);
	audPlay(event.key);
}
);