import camelCase from 'lodash.camelcase'

export const IS_ALL_DEEP_JOINS = '_is_all_deep_joins_'
export const IS_ALL_JOINS = '_is_all_joins_'
export const JOINS = '_joins_'
export const LIMIT = '_limit_'
export const PARSE = '_parse_'
export const SKIP = '_skip_'
export const WHERE = '_where_'

export const requestConfigConstants = [ IS_ALL_DEEP_JOINS,
  IS_ALL_JOINS,
  JOINS,
  LIMIT,
  SKIP
]

export const requestConfigKeysByConstant = {}
requestConfigConstants.forEach(requestConfigConstant => {
  requestConfigKeysByConstant[requestConfigConstant] = camelCase(requestConfigConstant)
})
