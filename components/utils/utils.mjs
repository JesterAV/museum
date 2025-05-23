export function createElement(tag, className, parent) {
    const newElement = document.createElement(tag);
    newElement.classList.add(className);
    parent.appendChild(newElement);

    return newElement;
}

export function cloneElement(copyElement, parent) {
    const cloneElement = copyElement.cloneNode(true);
    parent.appendChild(cloneElement);

    return cloneElement;
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

export function createCalendar(parent, replaceElement) {
    const dateIconContainer = createElement('div', 'dateIconContainer', parent);
    const dateIconFirst = createElement('img', 'dateIcon', dateIconContainer);
    const dateIconSecond = createElement('img', 'dateIcon', dateIconContainer);

    dateIconFirst.src = '/museum/assets/images/png/bookingTickets/date.png';
    dateIconSecond.src = '/museum/assets/images/png/bookingTickets/date-1.png';
    dateIconSecond.classList.add('secondIcon');

    const dateInput = createElement('input', 'dateFormInput', parent);
    dateInput.setAttribute('required', '');
    dateInput.type = 'date';
    dateInput.setAttribute('name', 'dateInput');

    const today = new Date();

    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    const formattedDate = `${yyyy}-${mm}-${dd}`;

    dateInput.setAttribute('min', formattedDate);

    const dateBtn = createElement('button', 'formBtn', parent);

    dateBtn.addEventListener('click', (event) => {
        event.preventDefault();
        dateInput.showPicker();
    });

    dateInput.addEventListener('change', function() {
        const selectedDate = new Date(this.value);

        const dayOfWeekList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday'
        ];

        const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const day = dayOfWeekList[selectedDate.getDay()];
        const month = monthsList[selectedDate.getMonth()];

        replaceElement.textContent = `${day}, ${month} ${selectedDate.getDate()}`;
    });

}

export function createTimeForm(parent, replaceItem) {
    const timeIcon = createElement('img', 'timeIcon', parent);
    timeIcon.src = '/museum/assets/images/png/bookingTickets/time.png';

    const timeInput = createElement('select', 'timeFormInput', parent);
    timeInput.setAttribute('required', '');
    timeInput.setAttribute('name', 'timeInput');

    function generateTimeOptions() {
        const startTime = 9 * 60;
        const endTime = 18 * 60;

        for (let time = startTime; time <= endTime; time += 30) {
            const hours = String(Math.floor(time / 60)).padStart(2, '0');
            const minutes = String(time % 60).padStart(2, '0');
            const optionValue = `${hours}:${minutes}`;

            const optionTime = createElement('option', 'optionTime', timeInput);
            optionTime.value = optionValue;
            optionTime.textContent = optionValue;

        }
    }

    generateTimeOptions();

    timeInput.addEventListener('change', function() {
        const selectedOption = this.value;
        replaceItem.textContent = `${selectedOption}`;
    });

    const timeBtn = createElement('button', 'formBtn', parent);

    timeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        timeInput.showPicker();
    });
}