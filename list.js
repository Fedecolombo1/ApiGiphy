window.addEventListener('load', function(){
    
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=VON27VP7So30oqdrcepu4H3x4AvJnPUG&limit=25&rating=G')
    .then(function(resultado){
        return resultado.json()
    })
    .then(function(respuesta){
        console.log(respuesta);
        var cantidadGifs = prompt('Cuantos gifs desea ver?')
        for(var i = 0;i<cantidadGifs;i++){
            document.querySelector('ul').innerHTML += '<li>' + respuesta.data[i].title + '</li>' + '<img src="' + respuesta.data[i].images.original.url + '">' + '<button> Fav </button>'
            var fav = document.querySelector('button').addEventListener('click', function(){
                sessionStorage.setItem(respuesta.data[i].id, respuesta.data[i].title)
            })
        }
    })
})