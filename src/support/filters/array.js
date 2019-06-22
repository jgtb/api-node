export default (key, type) => (arr) => {
  const value = ({ $in: arr.split(',').map(type) })

  return {
    key,
    value
  }
}
