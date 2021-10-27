import { initialMenuCard, filterMenu } from './menu-card.js'
import { mobileMenu } from './mobile-menu.js'
import { bookButton } from './book-table.js'
import { scrollToSection } from './scrollToSection.js'
import { contactForm } from './contact-form.js'

const initial = () => {
  const hamburger = document.querySelector('#menu-toggle')
  hamburger.addEventListener('click', mobileMenu)
  initialMenuCard()
  filterMenu()
  bookButton()
  scrollToSection()
  contactForm()
}

initial()
