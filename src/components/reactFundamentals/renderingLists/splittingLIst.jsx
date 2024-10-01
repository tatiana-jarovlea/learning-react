// Task 1 - Splitting a list in two

import { people } from '../data.js'
import { getImageUrlByPerson } from '../utils.js'

export default function List() {
  const chemists = people.filter((person) => person.profession === 'chemist')
  const others = people.filter((person) => person.profession !== 'chemist')

  const chemistsItems = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrlByPerson(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ))

  const othersItems = others.map((person) => (
    <li key={person.id}>
      <img src={getImageUrlByPerson(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ))

  return (
    <article>
      <h1>Chemists</h1>
      <ul>{chemistsItems}</ul>

      <h1> Others </h1>
      <ul>{othersItems}</ul>
    </article>
  )
}

