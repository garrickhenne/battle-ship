/* eslint-disable no-undef */
let isDraggingShip = false;

// Code adapted from: https://javascript.info/mouse-drag-and-drop
const shipIcons = document.getElementsByClassName('ship-icon');
for (const shipIcon of shipIcons) {
  shipIcon.onmousedown = (e) => {
    isDraggingShip = true;
    const moveAt = (pageX, pageY) => {
      shipIcon.style.left = pageX - shiftX + 'px';
      shipIcon.style.top = pageY - shiftY + 'px';
    };

    const onMouseMove = (event) => {
      moveAt(event.pageX, event.pageY);
    };

    let shiftX = e.clientX - shipIcon.getBoundingClientRect().left;
    let shiftY = e.clientY - shipIcon.getBoundingClientRect().top;

    e.preventDefault();

    shipIcon.style.position = 'absolute';
    shipIcon.style.zIndex = 1000;
    document.body.append(shipIcon);

    moveAt(e.pageX, e.pageY);

    document.addEventListener('mousemove', onMouseMove);

    shipIcon.onmouseup = (e) => {
      isDraggingShip = false;
      document.removeEventListener('mousemove', onMouseMove);

      const iconPosition = shipIcon.getBoundingClientRect();

      shipIcon.hidden = true;
      const elementUnderLeft = document.elementFromPoint(iconPosition.x, iconPosition.y);
      const elementUnderRight = document.elementFromPoint(iconPosition.right, iconPosition.bottom);
      // TODO: add 'hovered' class name to elements under. We could probably calculate all the cells below and hover them all.
      // don't forget to add handling of removal of class.

      console.log('icon position', iconPosition);
      console.log('element under left edge', elementUnderLeft);
      console.log('element under right edge', elementUnderRight);
      shipIcon.hidden = false;

      shipIcon.onmouseup = null;
    };
    shipIcon.ondragstart = () => false;
  };
}