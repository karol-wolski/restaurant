const scrollToSection = () => {
  const navigation = document.querySelectorAll('.navigation .nav__link')
  navigation.forEach(item =>
    item.addEventListener('click', e => {
      e.preventDefault()
      const sectionHash = item.getAttribute('href')
      const section = document.querySelector(sectionHash)
      const yOffset = sectionHash === '#about-us' ? 0 : -50
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    })
  )
}

export { scrollToSection }
