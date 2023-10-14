/* eslint-disable no-undef */
$(function() {
  console.log('jquery loaded.');

  const $container = $('div.grid-container');
  // Create a 10x10 grid and append to $container.
  for (let i = 0; i < 10; i++) {
    const $row = $('<div class="grid-row"></div>');
    for (let j = 0; j < 10; j++) {
      const $cell = $(`<div class="grid-cell" grid-position='${j}${i}'></div>`);
      $row.append($cell);
    }
    $container.append($row);
  }
});