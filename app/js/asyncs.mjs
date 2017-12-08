import { clickAddButton, clickPlayButton, clickModalCloseButton, openModal, closeModal } from './promises.mjs'

let queue = []

async function playQueue() {
  while (true) {
    const { closePromise, value } = queue[0]
    await openModal(value)
    await closePromise()
    await closeModal()
    queue.shift()
    if (queue.length === 0) break
  }
}

export async function watchPlay() {
  while (true) {
    await clickPlayButton()
    await playQueue()
  }
}

export async function watchInput() {
  while (true) {
    const value = await clickAddButton()
    const closePromise = clickModalCloseButton()
    queue.push({ value, closePromise })
  }
}
