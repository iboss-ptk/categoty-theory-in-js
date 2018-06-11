import { Logger, mkInspect } from '../log'
import { compose } from 'ramda'
import Task from 'folktale/concurrency/task'
const { inspect, info, table, error } = Logger
const { task } = Task

// getPersonById :: number -> Person
const getPersonById = id => ({
  1: { name: 'Boss', age: { year: 25, month: 2 } },
  2: { name: 'Pim', age: { year: 23, month: 6 } },
  3: { name: 'P', age: { year: 26, month: 11 } },
  4: { name: 'Aor', age: { year: 21, month: 0 } },
  5: { name: 'Cos', age: { year: 27, month: 1 } },
})[id]

// ageInMonths :: Person -> number
const ageInMonths = person => (person.age.year * 12) + person.age.month

// showAge :: number -> string
const showAge = months => `You are now ${months} months old!!`

// ## Usual Implementation
const usual = () => {
  const person = getPersonById(1)
  const age = ageInMonths(person)
  return showAge(age)
}

// inspect(usual())


















// =====================
// ## Composing Function
const comp = () => {
  const showPersonAge = compose(showAge, ageInMonths, getPersonById)
  return showPersonAge(1)
}

// inspect(comp())






























// =====================
// ## X in the Box

const Box = val => ({
  map: f => Box(f(val)),
  fold: () => val,
  inspect: mkInspect('Box', val)
})

const xInTheBox = () =>
  Box(2)
    .map(getPersonById)
    .map(ageInMonths)
    .map(showAge)
    .fold()

// inspect(xInTheBox())

































// =====================
// ## Changing context: single value to multiple value

const multi = () =>
  [1,2,3,4]
    .map(getPersonById)
    .map(ageInMonths)
    .map(showAge)
    .join('\n')

// inspect(multi())




// ## Changing context: With nullability

// Maybe a = Just a | Nothing

const Just = val => ({
  map: f => Just(f(val)),
  inspect: mkInspect('Just', val)
})

const Nothing = ({
  map: _ => Nothing,
  inspect: () => 'Nothing'
})

const maybe = val =>
  val == null ? Nothing : Just(val)

const nullable = () => 
  maybe(getPersonById(4))
    .map(ageInMonths)
    .map(showAge)

// inspect(nullable())






// getPersonByIdTask :: number -> Task[Person]
const getPersonByIdTask = id => task(({ resolve, reject }) => {
  const person = getPersonById(id)
  if (person) {
    resolve(person)
  } else {
    reject('person not found')
  }
})


// ## Changing context: With async
const withAsync = () => {
  return getPersonByIdTask(-7)
    .map(ageInMonths)
    .map(showAge)
}

// withAsync()
//     .run()
//     .listen({
//       onResolved: inspect,
//       onRejected: error,
//     })

// @@@ We have been using FUNCTOR!!
