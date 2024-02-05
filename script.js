// am pus totul intr-un "variable" si anume "token" ca sa fie mai profi

const token =
  "pk.eyJ1IjoiZGF2aWRjaHJpc3RpYW4xIiwiYSI6ImNscjlucHZ0ejAzNzQyaW54OHhhanVnMXkifQ.KaBR_RuWTkxmFjEBESP-JQ";

// am initializat pozitia noastra adevarata:
// am pus success daca va merge si error daca nu va merge
// calculatorul nu iti da nici o eroare, deaceea am pus si error
// coordonatele si le ia din navigator
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

// Dupa am zis, daca merge merg inauntrul lui si iau latitudinea si longitudinea
//acesta este un parametru (cheama o functie care nu exista inca, dar o cream mai tarziu)
function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([44.43, 26.1]);
}

// aici avem harta noastra:
//mai sus am folosit Array ca sa ii pot pune la "center" coordonatele.. long si lat,
// harta a luat-o de pe mapbox
function setupMap(center) {
  mapboxgl.accessToken = token;
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 14,
  });

  // am adauga nav control
  const nav = new mapboxgl.NavigationControl();

  // apoi am adautag nav control (default il pune in dreapta dar pot alege eu unde sa il puna)

  map.addControl(nav);

  // apoi am adaugat directiile, adica starting place si destination.

  let directions = new MapboxDirections({
    // aici am pus credentialele mele ca altfel nu poate accesa directiile
    accessToken: token,
  });

  map.addControl(directions, "top-left");
}
