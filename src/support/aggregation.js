const formatToDate = ({ key, format = '%d/%m/%Y' }) => ({
  $addFields: {
    [key]: { $dateToString: {
      format, date: `$${key}`, timezone: 'America/Sao_Paulo'
    } }
  }
})

const textSeparateByCommas = ({ input, key }) => ({
  $trim: {
    input: {
      $reduce: {
        input: `$${input}`,
        initialValue: '',
        in: { $concat: [ '$$value', ', ', `$$this.${key}` ] }
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
