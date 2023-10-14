/* eslint-disable no-undef */
let isDraggingShip = false;

$(function() {
  // Code adapted from: https://javascript.info/mouse-drag-and-drop
  const shipIcons = document.getElementsByClassName('ship-icon');
  for (const shipIcon of shipIcons) {
    const originalPosition = shipIcon.getBoundingClientRect();
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

        console.log('icon position', iconPosition);
        console.log('element under left edge', elementUnderLeft);
        console.log('element under left is positioned in screen at:', elementUnderLeft.getBoundingClientRect().left);
        shipIcon.hidden = false;

        shipIcon.onmouseup = null;

        // || !elementUnderRight.classList.contains('grid-cell')
        if (!elementUnderLeft.classList.contains('grid-cell')) {
          console.log('ship was calculated as out of bounds.');
          // TODO: Return ship to original position.
          shipIcon.style.top = originalPosition.top + 'px';
          shipIcon.style.left = originalPosition.left + 'px';
          return;
        }

        elementUnderLeft.append(shipIcon);
        // Make position 'snap' to grid.
        // shipIcon.style.position = 'static';
        shipIcon.style.left = elementUnderLeft.getBoundingClientRect().left + 'px';
        // Place ship in center of cell.
        shipIcon.style.top = elementUnderLeft.getBoundingClientRect().top + shipIcon.getBoundingClientRect().height / 2 + 'px';
      };
      shipIcon.ondragstart = () => false;
    };
  }
});