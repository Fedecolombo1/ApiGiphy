window.addEventListener('load', function(){
    const urlParams = new URLSearchParams(window.location.search);
    const cantidad = urlParams.get('cantidad');
    fetch('https://api.giphy.com/v1/gifs/search?api_key=VON27VP7So30oqdrcepu4H3x4AvJnPUG&q=&limit=' + cantidad + '&offset=0&rating=G&lang=en')
    .then(function(resultado){
        return resultado.json()
    })
    .then(function(respuesta){
        console.log(respuesta);
        const nombre = urlParams.get('nombre');
        document.querySelector('h1').innerHTML += nombre
    })
})