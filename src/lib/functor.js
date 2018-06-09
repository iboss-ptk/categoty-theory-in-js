import { Logger, mkInspect } from '../log'
import { compose } from 'ramda'
const { inspect, info, table, error } = Logger

// getPersonById :: number -> Person
const getPersonById = id => ({
  1: { name: 'Boss', age: { year: 25, month: 2 } },
  2: { name: 'Pim', age: { year: 23, month: 6 } },
  3: { name: 'P', age: { year: 26, month: 11 } },
  4: { name: 'Aor', age: { year: 21, month: 0 } },
})[id]

// sgeInMonths :: Person -> number
const ageInMonths = person => (person.age.year * 12) + person.age.month

// showAge :: number -> string
const showAge = months => `You are now ${months} months old!!`

// ## Usual Implementation
const usual = () => {}

// inspect(usual())




















// =====================
// ## Composing Function
const comp = () => {}

// inspect(comp())






























// =====================
// ## X in the Box

const xInTheBox = () => {}

// inspec(xInTheBox())

































// =====================
// ## Changing context: single value to multiple value

const multi = () => {}

// inspect(multi())




// ## Changing context: With nullability

const nullable = () => {}

inspect(nullable())







// @@@ We have been using FUNCTOR!!
