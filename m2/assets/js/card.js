

const proyects = 
[

    {
        id:1,
        image:'./assets/img/webCristianLeiva.png',
        name: 'Mi Portafolio',
        description:'Trabajos y presentación personal como profecional en área de desarrollo y negocios. ',
        link:'https://github.com/CristianLeivaA/consolidadoM2.git'

    },
    {
        id:2,
        image:'./assets/img/webNotariaER.png',
        name: 'Notaria Eduardo Roco',
        description:'Pagina web de la 1ra Notaria de Ñuñoa. ',
        link: 'https://notariaroco.cl'
        

    }

]


var root = document.querySelector('#root');

        proyects.forEach(proyect => {
        const cards = document.createElement('div') 
        cards.classList.add('col-4','border','border-4','m-1','h-auto','d-inline-block');
         cards.innerHTML = 

           `
           <button type="button" class="btn btn-secondary pt-sans-regular container fs-5 mt-5 col-3 d-md-block" onclick="location.href='${proyect.link}'">Ver</button>
                
           <div class="p-4 " id='name'>           
              
                    <div class="card-body">
                    <img src='${proyect.image}' class="card-img-top"alt='${proyect.description}'>
                    <h5 class="card-title titulos text-center pt-sans-bold fs-3 mt-4">${proyect.name}</h5>
                    <p class="card-text mt-5 fs-5 pt-sans-regular">${proyect.description}</p>
                    
                    </div>
                     
           </div> `
        root.appendChild(cards) 
        });

    




    
