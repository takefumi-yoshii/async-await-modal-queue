import { clickAddButton, clickPlayButton, clickModalCloseButton, showModal, hideModal } from './promises.mjs'

let queue = []

function findHighestPriorityItem (_arr) {
  const item = _arr.sort((a, b) => {
    if (a.priority > b.priority) return -1
    if (a.priority < b.priority) return 1
    return 0
  })[0]
  const index = _arr.findIndex(_item => _item === item)
  return { index, item }
}

async function playQueue() {
  while (true) {
    const { index, item } = findHighestPriorityItem(queue)
    const { closePromise, value } = item
    await showModal(value)
    await closePromise()
    await hideModal()
    queue.splice(index, 1)
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
    const { value, priority } = await clickAddButton()
    const closePromise = clickModalCloseButton()
    queue.push({ closePromise, value, priority })
  }
}
