import { alert } from './alert.js'
import { isEmail, isLetters, isPhoneNo, isRequired } from './helpers.js'
import { messages } from './messages.js'

const checkField = (inputId, required = false, onlyLetters = false) => {
  const input = document.getElementById(inputId)
  const { value, type } = input
  const errorMsgContainer = input.nextElementSibling
  let message = ''

  if (required === true) {
    if (isRequired(value)) {
      message += messages.REQUIRED_ERR_MSG
    }
  }

  if (onlyLetters === true) {
    if (!isLetters(value)) {
      message += messages.ONLY_LETTERS_ERR_MSG
    }
  }

  if (type === 'tel') {
    if (!isPhoneNo(value)) {
      message += messages.PHONE_ERR_MSG
    }
  }

  if (type === 'email') {
    if (!isEmail(value)) {
      message += messages.EMAIL_ERR_MSG
    }
  }

  if ((message && errorMsgContainer) || (!message && errorMsgContainer)) {
    errorMsgContainer.remove()
  }

  if (message) {
    input.parentElement.append(alert('error', message))
    return false
  }
  return true
}

export const contactForm = () => {
  const name = document.querySelector('#name')
  const telephone = document.querySelector('#telephone')
  const email = document.querySelector('#email')
  const message = document.querySelector('#message')
  const form = document.querySelector('#contact-form')

  name.addEventListener('focusout', () => checkField('name', true, true))
  telephone.addEventListener('focusout', () =>
    checkField('telephone', true, false)
  )
  email.addEventListener('focusout', () => checkField('email', true, false))
  message.addEventListener('focusout', () => checkField('message', true, false))

  form.addEventListener('submit', e => contactFormSubmit(e))
}

const contactFormSubmit = e => {
  e.preventDefault()
  let isValid

  isValid =
    checkField('name', true, true) &&
    checkField('telephone', true, false) &&
    checkField('email', true, false) &&
    checkField('message', true, false)

  if (isValid) {
    e.target.reset()
    e.target.append(alert('success', messages.SUCCESSFULLY_SEND_MSG, true))
  }
}

export { contactFormSubmit }
