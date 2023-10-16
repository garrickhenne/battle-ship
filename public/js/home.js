/* eslint-disable no-undef */
const toggleOrientationClass = ($icon) => {
  if ($icon.hasClass('horizontal')) {
    $icon.removeClass('horizontal');
    $icon.addClass('vertical');
    return;
  }
  $icon.removeClass('vertical');
  $icon.addClass('horizontal');
};

const moveAt = (pageX, pageY, shiftX, shiftY, $element) => {
  $element.css({ top: pageY - shiftY + 'px', left: pageX - shiftX + 'px' });
};

const onMouseMove = (event, shiftX, shiftY, $icon) => {
  moveAt(event.pageX, event.pageY, shiftX, shiftY, $icon);
};

$(function() {
  // Code adapted from: https://javascript.info/mouse-drag-and-drop
  const shipIcons = document.getElementsByClassName('ship-icon');
  for (const shipIcon of shipIcons) {
    const originalPosition = shipIcon.getBoundingClientRect();
    $(document).on('contextmenu', (e) => e.preventDefault());
    $(shipIcon).on('mousedown', function(e) {
      e.preventDefault();
      if (e.which === 1) {
        let shiftX = e.clientX - shipIcon.getBoundingClientRect().left;
        let shiftY = e.clientY - shipIcon.getBoundingClientRect().top;
        shipIcon.style.position = 'absolute';
        shipIcon.style.zIndex = 1000;
        document.body.append(shipIcon);

        moveAt(e.pageX, e.pageY, shiftX, shiftY, $(shipIcon));

        document.addEventListener('mousemove', (event) => onMouseMove(event, shiftX, shiftY, $(shipIcon)));

        shipIcon.onmouseup = (e) => {
          document.removeEventListener('mousemove', (event) => onMouseMove(event, shiftX, shiftY, $(shipIcon)));

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
          shipIcon.style.position = 'unset';
          shipIcon.style.left = elementUnderLeft.getBoundingClientRect().left + 'px';
          // Place ship in center of cell.
          shipIcon.style.top = elementUnderLeft.getBoundingClientRect().top + shipIcon.getBoundingClientRect().height / 2 + 'px';
        };
        shipIcon.ondragstart = () => false;
      }
      if (e.which === 3) {
        const $icon = $(this);
        console.log('right click');
        const origHeight = $icon.height();
        const origWidth = $icon.width();
        console.log('origHeight', origHeight);
        console.log('origWidth', origWidth);
        $icon.height(origWidth);
        $icon.width(origHeight);
        toggleOrientationClass($icon);
      }
    });
  }
});