import local from './local'
import { merge } from './_utils'

const onValue = ({ key }) => process.env[key]

export default merge(local, onValue)
