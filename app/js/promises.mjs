export function clickAddButton () {
  return new Promise(resolve => {
    document.getElementById('add-button')
      .addEventListener('click', (e) => {
        resolve(document.getElementById('input-text').value)
      }, { once: true })
  })
}

export function clickPlayButton () {
  return new Promise(resolve => {
    document.getElementById('play-button')
      .addEventListener('click', resolve, { once: true })
  })
}

export function clickModalCloseButton () {
  return (() => new Promise(resolve => {
    document.getElementById('modal-close-button')
      .addEventListener('click', resolve, { once: true })
    })
  )
}

export function wait (duration = 200) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}

export async function openModal (value) {
  document.getElementById('modal-title').innerHTML = value
  document.getElementById('modal').classList.add('show')
  await wait(50) // wait for css animation
  document.getElementById('modal').classList.add('open')
  await wait()
}

export async function closeModal () {
  document.getElementById('modal').classList.remove('open')
  await wait()
  document.getElementById('modal').classList.remove('show')
  document.getElementById('modal-title').innerHTML = null
}
