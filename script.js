const map = L.map('map').setView([-23.5505, -46.6333], 13); // São Paulo como exemplo 

 

 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 

    maxZoom: 19, 

}).addTo(map); 

 

 

const crimes = [ 

    { location: [-23.5505, -46.6333], type: 'Furto', color: 'yellow' }, 

    { location: [-23.5515, -46.6343], type: 'Roubo', color: 'red' }, 

]; 

 

 

crimes.forEach(crime => { 

    L.circleMarker(crime.location, { 

        color: crime.color, 

        radius: 8, 

    }).addTo(map).bindPopup(`Tipo: ${crime.type}`); 

}); 

 

 

document.getElementById('contact-form').addEventListener('submit', function(event) { 

    event.preventDefault(); 

    alert('Mensagem enviada com sucesso!'); 

    this.reset(); 

}); 