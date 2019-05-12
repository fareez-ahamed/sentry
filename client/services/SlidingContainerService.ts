
class SlidingContainerService {
  private listeners: CallableFunction[] = []

  public subscribe(callback: CallableFunction) {
    this.listeners.push(callback)
  }

  public triggerOpen() {
    this.listeners.forEach(item => {
      item(true)
    })
  }

  public triggerClose() {
    this.listeners.forEach(item => {
      item(false)
    })
  }
}

export default new SlidingContainerService()