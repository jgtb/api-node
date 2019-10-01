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

const booleanVirtual = ({ key, field = key, onTrue = 'Sim', onFalse = 'Não' }) => ({
  $addFields: {
    [field]: { $cond: [ { $eq: [ concat('$', key), true ] }, onTrue, onFalse ] }
  }
})

const statusVirtual = {
  $addFields: {
    statusDescription: {
      $switch: {
        branches: [
          { case: { $eq: [ '$status', 'active' ] }, then: 'Ativo' },
          { case: { $eq: [ '$status', 'inactive' ] }, then: 'Inativo' },
          { case: { $eq: [ '$status', 'deleted' ] }, then: 'Excluído' }
        ],
        default: 'Ativo'
      }
    }
  }
}

const count = {
  $group: {
    _id: null,
    count: { $sum: 1 }
  }
}

export {
  formatToDate,
  textSeparateByCommas,
  booleanVirtual,
  statusVirtual,
  count
}
