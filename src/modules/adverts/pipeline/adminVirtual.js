import { lookupVirtual, booleanVirtual, formatToDate, statusVirtual } from '../../../support/aggregation'

export default (req, _, next) => {
  const pipeline = [
    ...lookupVirtual({ from: 'users', field: 'user' }),
    ...lookupVirtual({ from: 'vehicles', field: 'vehicle' }),
    ...lookupVirtual({ from: 'brands', field: 'brand' }),
    ...lookupVirtual({ from: 'modes', field: 'mode' }),
    ...lookupVirtual({ from: 'versions', field: 'version' }),
    ...lookupVirtual({ from: 'fuels', field: 'fuel' }),
    ...lookupVirtual({ from: 'colors', field: 'color' }),
    { ...booleanVirtual({ prop: 'owner' }) },
    { ...booleanVirtual({ prop: 'acceptExchange' }) },
    { ...booleanVirtual({ prop: 'financed' }) },
    { ...formatToDate({ prop: 'soldOn' }) },
    { ...statusVirtual },
    { $project: {
      _id: 1,
      user: 1,
      name: 1,
      price: 1,
      year: 1,
      modelYear: 1,
      vehicle: 1,
      brand: 1,
      mode: 1,
      version: 1,
      fuel: 1,
      color: 1,
      financed: 1,
      acceptExchange: 1,
      owner: 1,
      status: 1
    }}
  ]
  
  req.setPipeline(pipeline)

  next()
}
