import { concatMany } from './utils'
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
    [concatMany('virtual', '.', prop)]: concatMany('$', field, '.', prop)
  }}
])

const formatToDate = ({ key, format = '%d/%m/%Y', timezone = 'America/Sao_Paulo' }) => ({
  $addFields: {
    [concatMany('virtual', '.', prop)]: { $dateToString: { format, date: concat('$', key), timezone } }
  }
})

const textSeparateByCommas = ({ prop, input }) => ({
  $addFields: {
    [concatMany('virtual', '.', prop)]: {
      $trim: {
        input: {
          $reduce: {
            input: concat('$', input),
            initialValue: '',
            in: { $concat: [ '$$value', ', ', concat('$$this.', prop) ] }
          }
        },
        chars: ', '
      }
    }
  }
})

const booleanVirtual = ({ prop, onTrue = 'Sim', onFalse = 'Não' }) => ({
  $addFields: {
    [concatMany('virtual', '.', prop)]: { $cond: [ { $eq: [ concat('$', prop), true ] }, onTrue, onFalse ] }
  }
})

const statusVirtual = {
  $addFields: {
    'virtual.status': {
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
