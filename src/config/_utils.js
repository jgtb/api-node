const reducer = (onValue) => (acc, [ _, { key, value } ]) => ({
  ...acc, [key]: onValue({ key, value })
})

const merge = (config, onValue) => {
  const onReducer = reducer(onValue)

  return Object
    .entries(config)
    .reduce(onReducer, {})
}

export {
  merge
}
