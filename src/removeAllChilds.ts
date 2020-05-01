export default (target) => {
  target.querySelectorAll('*').forEach((child) => {
    child.remove()
  })
}
