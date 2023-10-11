import featured from './featured'
import category from './category'
import restaurant from './restaurant'
import dish from './dish'
import {createSchema} from 'sanity'

export const schemaTypes = [restaurant, dish, category, featured]

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([restaurant, dish, category, featured]),
})
