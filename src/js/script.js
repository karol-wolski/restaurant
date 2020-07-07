import { initialMenuCard, filterMenu } from './menu-card.js'
import { mobileMenu } from './mobile-menu.js'

const initial = () => {
  const hamburger = document.querySelector('#menu-toggle')
  hamburger.addEventListener('click', mobileMenu)
  initialMenuCard()
  filterMenu()
}

initial()
