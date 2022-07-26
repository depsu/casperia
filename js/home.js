

const cardTerapia = document.getElementById('card-terapia')
const cardPsicologia = document.getElementById('card-psicologia')
const cardFonoaudiologia = document.getElementById('card-fonoaudiologia')
const descripcionEspecialidad3 = document.getElementById('descripcion-especialidad3')
const descripcionEspecialidad2 = document.getElementById('descripcion-especialidad2')
const descripcionEspecialidad = document.getElementById('descripcion-especialidad')


const flecha1 = document.getElementById('descripcion-especialidad-flecha')
const flecha2 = document.getElementById('descripcion-especialidad-flecha2')
const flecha3 = document.getElementById('descripcion-especialidad-flecha3')

cardPsicologia.addEventListener('click',(e)=>{
    

    if (descripcionEspecialidad.style.display === 'none'){
        descripcionEspecialidad.style.display = ''
        descripcionEspecialidad2.style.display = 'none'
        descripcionEspecialidad3.style.display = 'none'

        flecha1.style.display = ''
        flecha2.style.display = 'none'
        flecha3.style.display = 'none'
    }

})

cardTerapia.addEventListener('click',(e)=>{
 

    if (descripcionEspecialidad2.style.display === 'none'){
        descripcionEspecialidad2.style.display = ''
        descripcionEspecialidad.style.display = 'none'
        descripcionEspecialidad3.style.display = 'none'

        flecha2.style.display = ''
        flecha1.style.display = 'none'
        flecha3.style.display = 'none'
    }

})

cardFonoaudiologia.addEventListener('click',(e)=>{

    if (descripcionEspecialidad3.style.display === 'none'){
        descripcionEspecialidad3.style.display = ''
        descripcionEspecialidad.style.display = 'none'
        descripcionEspecialidad2.style.display = 'none'

        flecha3.style.display = ''
        flecha2.style.display = 'none'
        flecha1.style.display = 'none'
    }

})


/*carrusel especialistas*/

new Splide(".splide-especialistas", {
    perPage: 4,
    perMove: 1,
    breakpoints: {
        1232: {
            perPage: 3,
            drag: true,
            type: "loop",
            autoplay: true,
            padding: {
                right: "0",
                left: "0",
            },
        },
        
        1030: {
            perPage: 2,
            drag: true,
            type: "loop",
            autoplay: true,
            padding: {
                right: "0",
                left: "0",
            },
        },
        750: {
            perPage: 1,
            drag: true,
            type: "loop",
            autoplay: true,
            padding: {
                right: "0",
                left: "0",
            },
        },
    },
    type: "loop",
    pagination: false,
    gap: 0,
    arrows: true,
    autoplay: false,
    drag: true,
}).mount();



