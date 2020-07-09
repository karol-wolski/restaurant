import { initialMenuCard, filterMenu } from './menu-card.js'
import { mobileMenu } from './mobile-menu.js'
import { bookButton } from './book-table.js'

const initial = () => {
  const hamburger = document.querySelector('#menu-toggle')
  hamburger.addEventListener('click', mobileMenu)
  initialMenuCard()
  filterMenu()
  bookButton()
}

initial()
