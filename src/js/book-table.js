const bookButton = () => {
  const button = document.querySelector('#book-table')
  button.addEventListener('click', () => bookATable())
}

const bookATable = () => {
  const body = document.querySelector('body')
  const html = `
    <div class="book-table__wrapper">
      <button name="close form" id="close-form" class="close" aria-label="Close modal">
        <span class="close__line"></span>
        <span class="close__line"></span>
      </button>
      <h2 class="book-table__title">Book a table</h2>

      <form action="" class="form-reservation">
        <div class="form-reservation__group">
          <label class="form-reservation__label" for="name">Name *</label>
          <input class="form-reservation__field" id="name" name="name" type="text">
        </div>
        <div class="form-reservation__group">
          <label class="form-reservation__label" for="email">Email *</label>
          <input class="form-reservation__field" id="email" name="email" type="email">
        </div>
        <div class="form-reservation__group">
          <label class="form-reservation__label" for="phone">Phone *</label>
          <input class="form-reservation__field" id="phone" name="phone" type="tel">
        </div>
        <div class="form-reservation__group">
          <label class="form-reservation__label" for="date">Date *</label>
          <input class="form-reservation__field" id="date" name="date" type="date">
        </div>
        <div class="form-reservation__group">
          <label class="form-reservation__label" for="time">Time *</label>
          <input class="form-reservation__field" id="time" name="time" type="time">
        </div>
        <div class="form-reservation__group">
          <label class="form-reservation__label" for="seats">Seats *</label>
          <input class="form-reservation__field" id="seats" name="seats" type="number" min="1" max="6">
        </div>

        <div class="form-reservation__group form-reservation__group--w100">
          <label class="form-reservation__label" for="special-requests">Special requests *</label>
          <textarea class="form-reservation__field form-reservation__field--textarea" id="special-requests"
            name="special-requests"></textarea>
        </div>
        <button class="btn btn__contained form-reservation__button" id="sendForm" type="submit">Send</button>
      </form>
    </div>
  `
  const element = document.createElement('div')
  element.classList.add('book-table')
  element.innerHTML = html
  body.appendChild(element)

  const closeModal = () => {
    const removeElement = document.querySelector('.book-table')
    body.removeChild(removeElement)
  }

  const closeModalButton = document.querySelector('#close-form')
  closeModalButton.addEventListener('click', closeModal)
}

export { bookButton }
