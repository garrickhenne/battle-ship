/* eslint-disable no-undef */
const toggleOrientationClass = function($icon) {
  const origHeight = $icon.height();
  const origWidth = $icon.width();
  $icon.height(origWidth);
  $icon.width(origHeight);
  if ($icon.hasClass('horizontal')) {
    $icon.removeClass('horizontal');
    $icon.addClass('vertical');
  } else {
    $icon.removeClass('vertical');
    $icon.addClass('horizontal');
  }
};

$(function() {
  // Code adapted from: https://javascript.info/mouse-drag-and-drop
  const shipIcons = document.getElementsByClassName('ship-icon');
  for (const shipIcon of shipIcons) {
    const originalPosition = shipIcon.getBoundingClientRect();
    $(document).on('contextmenu', (e) => e.preventDefault());
    $(shipIcon).on('mousedown', function(e) {
      e.preventDefault();
      if (e.button === 2) {
        console.log('right click');
        toggleOrientationClass($(this));
        return;
      }

      const $icon = $(shipIcon);
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

      $(document).on('mousemove', onMouseMove);

      $icon.on('mouseup', function(e) {
        $(document).off('mousemove', onMouseMove);

        const iconPosition = shipIcon.getBoundingClientRect();

        shipIcon.hidden = true;
        const elementUnderLeft = document.elementFromPoint(iconPosition.x, iconPosition.y);
        const elementUnderRight = document.elementFromPoint(iconPosition.right, iconPosition.bottom);

        console.log('icon position', iconPosition);
        console.log('element under left edge', elementUnderLeft);
        console.log('element under left is positioned in screen at:', elementUnderLeft.getBoundingClientRect().left);
        shipIcon.hidden = false;

        $icon.off('mouseup');

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
      });
      shipIcon.ondragstart = () => false;
    });
  }
});