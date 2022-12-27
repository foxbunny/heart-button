{
  'use strict'

  let
    $images = document.getElementById('images')

  $images.ondblclick = ev => {
    let $checkbox = ev.target.closest('picture')?.parentElement.parentElement.firstElementChild
    if (!$checkbox) return
    $checkbox.checked = !$checkbox.checked
  }
  for (let $ of $images.querySelectorAll('input'))
    $.onfocus = ev => {
      if (document.body.dataset.mode === 'keyboard') ev.target.scrollIntoView()
    }

  let
    switchToPointerInteractionCues = () => {
      document.body.dataset.mode = 'pointer'
      document.body.addEventListener('keydown', switchToKeyboardInteractionCues, { once: true })
    },
    switchToKeyboardInteractionCues = () => {
      document.body.dataset.mode = 'keyboard'
      document.body.addEventListener('pointerdown', switchToPointerInteractionCues, { once: true })
    }

  switchToPointerInteractionCues()
}
