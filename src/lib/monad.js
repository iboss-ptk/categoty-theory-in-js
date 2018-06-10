import { Logger, mkInspect } from '../log'
import { composeK } from 'ramda'
import { List } from 'immutable'
import Maybe from 'folktale/maybe'
import Task from 'folktale/concurrency/task'
const { inspect, info, table, error } = Logger
const { Just, Nothing } = Maybe
const { task, waitAll } = Task

// getPersonById :: number -> Person
const getPersonById = id => ({
  1: { name: 'Boss', age: { year: 25, month: 2 } },
  2: { name: 'Pim', age: { year: 23, month: 6 } },
  3: { name: 'P', age: { year: 26, month: 11 } },
  4: { name: 'Aor', age: { year: 21, month: 0 } },
  5: { name: 'Cos', age: { year: 27, month: 1 } },
})[id]


// findFriendsWithinOneYear :: Person -> List[Person]
const findFriendsWithinOneYear = person =>
  List.of(1,2,3,4,5)
    .map(getPersonById)
    .filter(({ name, age }) =>
      Math.abs(person.age.year - age.year) <= 1
      && name !== person.name
    )

// == with task ==
// getPersonByIdTask :: number -> Task[Person]
const getPersonByIdTask = id => task(({ resolve, reject }) => {
  const person = getPersonById(id)
  if (person) {
    resolve(person)
  } else {
    reject('person not found')
  }
})

// findFriendsWithinOneYearTask :: Person -> Task[List[Person]]
const findFriendsWithinOneYearTask = person => task(({ resolve, reject }) => {
  resolve(findFriendsWithinOneYear(person))
})

// flatten structure
const flat = () => {}

// info(flat())




























// =====================
// ## chaining call


const chainingCall = () => {}


// chainingCall()
//   .run()
//   .listen({
//     onResolved: inspect,
//     onRejected: error,
//   })



































// =====================
// ## using natural transformation: firstTask

const firstTask = ([x, ...xs]) => task(({ resolve, reject }) => {
  if(x != null) {
    resolve(x)
  } else {
    reject('404 friend not found')
  }
})

const firstFriend = () => {}


// firstFriend()
//   .run()
//   .listen({
//     onResolved: inspect,
//     onRejected: error,
//   })







// =====================
// compose kleisli


const compFirstFriend = () => {}


// compFirstFriend()
//   .run()
//   .listen({
//     onResolved: inspect,
//     onRejected: error,
//   })
