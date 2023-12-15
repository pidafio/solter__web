window.addEventListener("load",()=>{

    var lat
    var long

    let temperaturaValor=document.getElementById("temperatura_valor")
    let temperaturaDescripcion=document.getElementById("temperatura__descripcion")
    let ubicacionValor=document.getElementById("ubicacion_valor")
    let humedadValor=document.getElementById("humedad_valor")
    let icono=document.getElementById("icono__descripcion")

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(posicion=>{
            
            lat=posicion.coords.latitude
            long=posicion.coords.longitude
            console.log(lat ,long)
           
            const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=506cbb64e4d3ab70bd380e68f3d4efff&lang=es`
            console.log(url)

            fetch(url)
            .then(response=>{return response.json()})
            .then(data=>{
                var temp=Math.round(data.main.temp)
                temperaturaValor.innerHTML=`${temp} °C`
                var temDes=data.weather[0].description
                temperaturaDescripcion.innerHTML=temDes.toUpperCase()
                var ubic=data.name
                ubicacionValor.innerHTML=ubic.toUpperCase()
                var hum=Math.round(data.main.humidity)
                humedadValor.innerHTML=`${hum} %`
                var ico=data.weather[0].icon
                icono.src= `https://openweathermap.org/img/wn/${ico}@2x.png`




                console.log(data.main.humidity)})
            .catch(err=>{
                console.log(err)
            })
        })
    }
})