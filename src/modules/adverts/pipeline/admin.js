import { lookupVirtual, booleanVirtual, formatToDate } from '../../../support/aggregation'

export default (req, _, next) => {
  const pipeline = [
    ...lookupVirtual({ from: 'users', field: 'user' }),
    ...lookupVirtual({ from: 'vehicles', field: 'vehicle' }),
    ...lookupVirtual({ from: 'brand', field: 'brands' }),
    ...lookupVirtual({ from: 'mode', field: 'modes' }),
    ...lookupVirtual({ from: 'versions', field: 'version' }),
    ...lookupVirtual({ from: 'fuels', field: 'fuel' }),
    ...lookupVirtual({ from: 'colors', field: 'color' }),
    { ...booleanVirtual({ key: 'owner', field: 'ownerDescription' }) },
    { ...booleanVirtual({ key: 'acceptExchange', field: 'acceptExchangeDescription' }) },
    { ...booleanVirtual({ key: 'financed', field: 'financedDescription' }) },
    { ...formatToDate({ key: 'soldOn', field: 'soldOnDescription' }) },
    // { $project: {
    //   _id: 1,
    //   title: 1,
    //   price: 1,
    //   year: 1,
    //   modeYear: 1,
    //   km: 1,
    //   board: 1,
    //   doors: 1,
    //   motor: 1,
    //   valves: 1,
    //   photos: 1
    // }}
  ]
  
  req.setPipeline(pipeline)

  next()
}
