const menuIcono = document.querySelector('.menu-icono');
const menuLista = document.querySelector('.menu-lista');

menuIcono.addEventListener('click', () => {
 menuLista.style.display = menuLista.style.display === 'flex' ? 'none' : 'flex';
});



// hacer visible los section del portfolio
const figures = document.querySelectorAll('main>section:nth-of-type(2)>article>figure');

figures.forEach(figure => {
   const section = figure.querySelector('section');

   figure.addEventListener('mouseenter', () => {
       section.style.visibility = 'visible';
   });
		
   figure.addEventListener('mouseleave', () => {
     section.style.visibility = 'hidden';
   });
});

function myFunction() {
  	var x = document.getElementById("Demo");
  	if (x.className.indexOf("w3-show") == -1) {
  	  x.className += " w3-show";
  	} else { 
  	  x.className = x.className.replace(" w3-show", "");
  	}
	}