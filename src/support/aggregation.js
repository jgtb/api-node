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

export {
  formatToDate,
  textSeparateByCommas
}
