const removeFilterActiveClass = filters => {
  filters.forEach(item => {
    if (item.classList && item.classList.contains('btn__text--active')) {
      item.classList.remove('btn__text--active')
    }
  })
}

const initialMenuCard = () => {
  const category = 'starter'
  const items = document.querySelectorAll('.menu-card__dish-item')
  let singleItem

  items.forEach(galleryItem => {
    singleItem = galleryItem

    return (singleItem.style.display = galleryItem.classList.contains(category)
      ? 'grid'
      : 'none')
  })
}

const filterMenu = () => {
  const filtersNav = document.querySelectorAll('.menu-card__nav-item button')

  filtersNav.forEach(item => {
    item.addEventListener('click', () => {
      const category = item.dataset.filter || 'starter'
      const items = document.querySelectorAll('.menu-card__dish-item')
      let singleItem

      removeFilterActiveClass(filtersNav)
      item.classList.add('btn__text--active')
      items.forEach(galleryItem => {
        singleItem = galleryItem

        return (singleItem.style.display = galleryItem.classList.contains(
          category
        )
          ? 'grid'
          : 'none')
      })
    })
  })
}

export { initialMenuCard, filterMenu }
