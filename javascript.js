
			
	
	var meni = document.getElementById("main-menu");
	var rastojanjeMenijaOdVrha = meni.offsetTop;

	var logoHeader = document.getElementById("logo");

	window.addEventListener("scroll", vrhSajta);

		function vrhSajta () {
			if (window.pageYOffset > rastojanjeMenijaOdVrha) {
				meni.style.position = "fixed";
				meni.style.top = "0";
				meni.style.width = "100%";
				meni.style.zIndex = "1";
				
			} else {
				meni.style.position = "absolute";
				meni.style.top = "140px";
				meni.style.width = "100%";
				}
		
			logoHeader.style.top = (window.pageYOffset / 10) + "px";
		}
	
		
	document.getElementById('btnUpit').addEventListener("click", target);
					
		function target () {
			alert("Podaci su poslati. Potrudićemo se da Vam odgovorimo u najkraćem mogućem roku.");
			document.removeEventListener("click", target);
		}
				