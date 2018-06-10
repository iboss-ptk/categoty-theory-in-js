import { Logger, mkInspect } from '../log'
import { compose } from 'ramda'
import Task from 'folktale/concurrency/task'
const { inspect, info, table, error } = Logger

// getPersonById :: number -> Person
const getPersonById = id => ({
  1: { name: 'Boss', age: { year: 25, month: 2 } },
  2: { name: 'Pim', age: { year: 23, month: 6 } },
  3: { name: 'P', age: { year: 26, month: 11 } },
  4: { name: 'Aor', age: { year: 21, month: 0 } },
  5: { name: 'Cos', age: { year: 27, month: 1 } },
})[id]

// sgeInMonths :: Person -> number
const ageInMonths = person => (person.age.year * 12) + person.age.month

// showAge :: number -> string
const showAge = months => `You are now ${months} months old!!`

// ## combining person: accumulation

const AccPerson = {
  identity: { name: '', age: { year: 0, month: 0 } },
  combine: (p1, p2) => ({
    name: p1.name + (p1.name === '' ? '' : ' and ') + p2.name,
    age: {
      year: p1.age.year + p2.age.year,
      month: p1.age.month + p2.age.month,
    }
  })
}

const accPerson = () => {}

// inspect(accPerson())























// ## combining person: oldest

const OldestPerson = {
  identity: { name: '', age: { year: -Infinity, month: 0 } },
  combine: (p1, p2) => {
    if (p1.age.year === p2.age.year) {
      return p1.age.month > p2.age.month ? p1 : p2
    } else if (p1.age.year > p2.age.year) {
      return p1
    } else {
      return p2
    }
  }
}

const oldestPerson = () => {}

// inspect(oldestPerson())


// ## pattern found: foldMap!
