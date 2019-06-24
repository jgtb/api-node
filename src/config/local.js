import { merge } from './_utils'

const config = {
  mongoDB: {
    key: 'mongoDB',
    value: 'mongodb://localhost:27017/app'
  },
  secret: {
    key: 'secret',
    value: '2i34234923423i42'
  }
}

const onValue = ({ value }) => value

export default merge(config, onValue)
