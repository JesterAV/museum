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

export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

export function createCalendar(parent) {
    const dateIconContainer = createElement('div', 'dateIconContainer', parent);
    const dateIconFirst = createElement('img', 'dateIcon', dateIconContainer);
    const dateIconSecond = createElement('img', 'dateIcon', dateIconContainer);

    dateIconFirst.src = '/museum/assets/images/png/bookingTickets/date.png';
    dateIconSecond.src = '/museum/assets/images/png/bookingTickets/date-1.png';
    dateIconSecond.classList.add('secondIcon');

    const dateInput = createElement('input', 'dateFormInput', parent);
    dateInput.placeholder = 'Date';
    dateInput.setAttribute('required', '');
    dateInput.type = 'date';
    dateInput.setAttribute('name', 'dateInput');

    const dateBtn = createElement('button', 'formBtn', parent);

    dateBtn.addEventListener('click', (event) => {
        event.preventDefault();
        dateInput.showPicker();
    });

}

export function createTimeForm(parent) {
    const timeIcon = createElement('img', 'timeIcon', parent);
    timeIcon.src = '/museum/assets/images/png/bookingTickets/time.png';

    const timeInput = createElement('input', 'timeFormInput', parent);
    timeInput.type = 'time';

    const timeBtn = createElement('button', 'formBtn', parent);

    timeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        timeInput.showPicker();
    });
}