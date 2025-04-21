export function createElement(tag, className, parent) {
    const newElement = document.createElement(tag);
    newElement.classList.add(className);
    parent.appendChild(newElement);

    return newElement;
}