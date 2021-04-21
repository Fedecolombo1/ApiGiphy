window.addEventListener('load', function(){
    
    fetch('https://api.giphy.com/v1/gifs/random?api_key=VON27VP7So30oqdrcepu4H3x4AvJnPUG&tag=&rating=G')
    .then(function(resultado){
        return resultado.json()
    })
    .then(function(respuesta){
        console.log(respuesta);
        
        document.querySelector('h1').innerHTML = respuesta.data.title
        document.querySelector('img').src = respuesta.data.image_url
    })
    .catch()
    document.querySelector('button').addEventListener('click', function(){
        fetch('https://api.giphy.com/v1/gifs/random?api_key=VON27VP7So30oqdrcepu4H3x4AvJnPUG&tag=&rating=G')
    .then(function(resultado){
        return resultado.json()
    })
    .then(function(respuesta){
        console.log(respuesta);
        
        document.querySelector('h1').innerHTML = respuesta.data.title
        document.querySelector('img').src = respuesta.data.image_url
    })
    .catch()
    })
})