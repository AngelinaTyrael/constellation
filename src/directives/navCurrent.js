export default {
  mounted (el, binding) {
    const { className, activeClass, curIdx } = binding.value
    const oNavItems = el.getElementsByClassName(className)
    
    oNavItems[curIdx].className += ` ${activeClass}`
  },
  updated (el, binding) {
    const { className, activeClass, curIdx } = binding.value
    const oOptions = binding.oldValue
    const oNavItems = el.getElementsByClassName(className)

    oNavItems[curIdx].className += ` ${activeClass}`
    oNavItems[oOptions.curIdx].className = className
  }
}