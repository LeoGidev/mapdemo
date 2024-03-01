var map = L.map('map').
    setView([-32.8908, -68.8272], 12);
     
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        
        maxZoom: 18
    }).addTo(map);
    
    var Icono = L.icon({
    iconUrl: "img/up.png",
    iconSize: [30, 30],
    iconAnchor: [15, 40],
    
    shadowSize: [35, 50],
    shadowAnchor: [18, 38],
    popupAnchor: [0, -40]
    });
    
    var IconoDown = L.icon({
    iconUrl: "img/down.png",
    iconSize: [30, 30],
    iconAnchor: [15, 40],
    
    shadowSize: [35, 50],
    shadowAnchor: [18, 38],
    popupAnchor: [0, -40]
    });
    
    var customPopup1 = 'Nodo:Plaza Burgos';
    var customOptions1 = {
        'maxWidth': '200',
        'className' : 'custom'
    }
    var marker1 = L.marker([-32.849376475660264, -68.84059851534498], { title: 'Plaza Burgos',
      draggable: false,
      icon: Icono}).bindPopup(customPopup1, customOptions1).addTo(map);
    var customPopup2 = 'Nodo:Godoy Cruz';
    var customOptions2 = {
        'maxWidth': '200',
        'className' : 'custom'
    }
    var marker2 = L.marker([-32.925101961991615, -68.84443919027653], { title: 'Godoy Cruz',
      draggable: false,
      icon: Icono}).bindPopup(customPopup2, customOptions2).addTo(map);
    
      var a='';
      
      function cambiarpunto() {
                if(a==0){
                    
                   map.removeLayer(marker2);
                    marker2 = L.marker([-32.925101961991615, -68.84443919027653], { title: 'Plaza Burgos',
                                                                            draggable: false,
                                                                            icon: IconoDown}).bindPopup(customPopup1, customOptions1).addTo(map);
                                                                            var customPopup2 = 'Nodo:Godoy Cruz';
                                                                            var customOptions2 = {
                                                                            'maxWidth': '200',
                                                                            'className' : 'custom'}
                                                                            
                a=1;
                console.log(a);
    
     
                }
                else{
                    
                    map.removeLayer(marker2);
                   
                    marker2 = L.marker([-32.925101961991615, -68.84443919027653], { title: 'Plaza Burgos',
                                                                        draggable: false,
                                                                        icon: Icono}).bindPopup(customPopup1, customOptions1).addTo(map);
                                                                        var customPopup2 = 'Nodo:Godoy Cruz';
                                                                        var customOptions2 = {
                                                                        'maxWidth': '200',
                                                                        'className' : 'custom'} 
                                                                        a=0;   
                                                                        console.log(a);                                           
                    }
                }
                setInterval(cambiarpunto, 2000);