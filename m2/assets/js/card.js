

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
        image:'./assets/img/webNotariER.png',
        name: 'Notaria Eduardo Roco',
        description:'Pagina web de la 1ra Notaria de Ñuñoa. ',
        link: 'https://notariaroco.cl'
        

    }

]


const root = document.querySelector('#root');

        proyects.forEach(proyect => {
        const cards = document.createElement('div') 
         cards.innerHTML = 
           `<div class="row row-cols-1 row-cols-md-2 g-4 id='${proyects.id}'>
           <div class="col">
             <div class="card">
               <img src='${proyects.image}' class="card-img-top" alt='${proyects.link}'>
               <div class="card-body">
                 <h5 class="card-title text-center">${proyects.name}</h5>
                 <p class="card-text">${proyects.description}</p>
               </div>
             </div>
           </div> `
        root.appendChild(cards) 
        });

    




    
