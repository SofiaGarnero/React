 const productos = [
    {
        nombre: 'Crema corporal',
        categoria : "Cuidados diarios",
        descripcion:'Tecnología inteligente, piel profundamente nutrida.Acelera la renovación celular.Piel saludable e iluminada.',
        precio: 12000,
        id: 1,
        imagen: 'https://i.pinimg.com/236x/a5/64/38/a56438c7d906d96f4658f4de27244b8f.jpg',
        stock: 6,
    },
    {
        nombre: 'Jabones',
        categoria : "Cuidados diarios",
        descripcion:'Limpieza cremosa y purificante.Piel perfumada y protegida.Mantiene la hidratación natural de la piel.',
        precio: 5600,
        id: 2,
        imagen:'https://i.pinimg.com/236x/ee/96/92/ee96921d301c2e834c3aa614249c3ec4.jpg',
        stock: 3,
    },
    {
        nombre: 'desodorantes',
        categoria : "Cuidados diarios",
        descripcion: "Complejo vitaminico e hidratante con Vitamina E, Protección prolongada: protección por 48hs contra los efectos del sudor, No deja residuos blancos en los tejidos oscuros, ni manchas amarillentas en los tejidos blancos ",
        precio: 3000,
        id: 3,
        imagen:'https://i.pinimg.com/236x/5f/97/4f/5f974f2aaf550629f880feada15a492e.jpg',
        stock: 1,
    },
    {
        nombre: 'Pulpa exfolante',
        categoria : "Cuidados diarios",
        descripcion:'Piel renovada e hidratada.Textura cremosa.Remueve lás celulas muertas dejando la piel suave.',
        precio: 9000,
        id: 4,
        imagen:'https://i.pinimg.com/236x/1f/ee/7a/1fee7ac1337daa171c008d492e6af74d.jpg',
        stock: 10,
    }]

    // const getProductos =() => {
    //      return new promise ((resolve,reject) => {
    //         setTimeout(() => {
    //              productos.length > 0 ? resolve(productos) : rejected('No hay productos')
    //         }, 500);
    //     })
    //  }
    export default productos