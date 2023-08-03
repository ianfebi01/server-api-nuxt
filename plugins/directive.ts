export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('types', {
    beforeMount: (el: HTMLInputElement, binding: any) => {
      // this two prevent from copy&paste non-number text, including "e".
      // need to have both together to take effect.

      const { value: type } = binding
      el.type = ['tel', 'number'].includes(type) ? 'tel' : type
      el.addEventListener('input', () => {
        return el.validity?.valid || (el.value = '')
      })

      // this prevents from typing non-number text, including "e".
      el.addEventListener('keypress', (evt: any) => {
        evt = evt || window.event

        const charCode = evt.which ? evt.which : evt.keyCode
        if (['tel', 'number'].includes(type)) {
          if (charCode < 48 || charCode > 57) { evt.preventDefault() }
        } else if (type === 'birthday') {
          if (/^\-|([0-9])/.test(evt.key)) {
            return true
          } else { evt.preventDefault() }
        } else if (type === 'alpha') {
          if (/^([a-zA-Z])/.test(evt.key)) {
            return true
          } else { evt.preventDefault() }
        } else { return true }
      })
    }
  })
  nuxtApp.vueApp.directive('types', {
    beforeMount: (el: HTMLInputElement, binding: any) => {
      el.addEventListener('paste', (evt) => {
        evt.preventDefault()
        const clipboardData = evt.clipboardData || window.clipboardData
        const pastedText = clipboardData.getData('text/plain')
        const replacedText = pastedText.replace(forbiddenChar, '')
        // document.execCommand('insertText', false, replacedText) // deprecated function, saved in case of emergency
        insertTextAtCaret(evt.target, replacedText)
        evt.target.dispatchEvent(new Event('input', { bubbles: true }))
      })

      // this prevents from typing non-number text, including "e".
      el.addEventListener('keypress', (evt: any) => {
        evt = evt || window.event

        const charCode = evt.which ? evt.which : evt.keyCode
        if (['tel', 'number'].includes(type)) {
          if (charCode < 48 || charCode > 57) { evt.preventDefault() }
        } else if (type === 'birthday') {
          if (/^\-|([0-9])/.test(evt.key)) {
            return true
          } else { evt.preventDefault() }
        } else if (type === 'alpha') {
          if (/^([a-zA-Z])/.test(evt.key)) {
            return true
          } else { evt.preventDefault() }
        } else { return true }
      })
    }
  })
})