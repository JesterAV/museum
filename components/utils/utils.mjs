export function createElement(tag, className, parent) {
    const newElement = document.createElement(tag);
    newElement.classList.add(className);
    parent.appendChild(newElement);

    return newElement;
}

export function createMap(api) {
    mapboxgl.accessToken = api;

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [2.3364, 48.86091],
        zoom: 15
    });

    const markers = [
        { coordinates: [2.3364, 48.86091] },
        { coordinates: [2.3333, 48.8602] },
        { coordinates: [2.3397, 48.8607] },
        { coordinates: [2.3330, 48.8619] },
        { coordinates: [2.3365, 48.8625] }
    ];

    markers.forEach(markerData => {
        const marker = new mapboxgl.Marker()
        .setLngLat(markerData.coordinates)
        .addTo(map)
    })
}

export function openWindow(url) {
    let width = window.innerWidth * 0.8;
    let height = window.innerHeight * 0.8;

    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 2) - (height / 2);

    window.open(url, 'popop', 'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left);
}