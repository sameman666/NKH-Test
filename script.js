document.querySelectorAll(`.task__accordion-title`).forEach((item) => {
  item.addEventListener(`click`, () => {
    item.parentNode.classList.toggle(`task__accordion--opened`)
  })
});