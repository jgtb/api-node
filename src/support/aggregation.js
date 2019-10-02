import { concatMany } from '../support/utils'
import { concat } from 'ramda'

const lookupVirtual = ({ from, field, prop = 'name' }) => ([
  { $lookup: {
    from,
    localField: field,
    foreignField: '_id',
    as: field
  }},
  { $unwind: concat('$', field) },
  { $addFields: {
    [concatMany(field, '.', prop)]: concat('$', field, '.', prop)
  }},
])

const formatToDate = ({ key, field = key, format = '%d/%m/%Y', timezone = 'America/Sao_Paulo' }) => ({
  $addFields: {
    [field]: { $dateToString: { format, date: concat('$', key), timezone } }
  }
})

const textSeparateByCommas = ({ key, field = key, input }) => ({
  $addFields: {
    [field]: {
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
    }
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
  lookupVirtual,
  formatToDate,
  textSeparateByCommas,
  booleanVirtual,
  statusVirtual,
  count
}
