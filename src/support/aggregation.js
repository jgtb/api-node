import { concat } from 'ramda'

const formatToDate = ({ key, format = '%d/%m/%Y', timezone = 'America/Sao_Paulo' }) => ({
  $addFields: {
    [key]: { $dateToString: { format, date: concat('$', key), timezone } }
  }
})

const textSeparateByCommas = ({ input, key }) => ({
  $trim: {
    input: {
      $reduce: {
        input: concat('$', input),
        initialValue: '',
        in: { $concat: [ '$$value', ', ', concat('$$this.', key) ] }
      }
    },
    chars: ', '
  }
})

const count = {
  $group: {
    _id: null,
    count: { $sum: 1 }
  }
}

export {
  formatToDate,
  textSeparateByCommas,
  count
}
