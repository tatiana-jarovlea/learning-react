// Task 3 - Refactor a series of ? : to if and variables

function Drink({ name }) {
  let partOfPlant = 'leaf'
  let coffeine = '15–70 mg/cup'
  let age = '4,000+ years'

  if (name === 'coffee') {
    partOfPlant = 'bean'
    coffeine = '80–185 mg/cup'
    age = '1,000+ years'
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{partOfPlant}</dd>
        <dt>Caffeine content</dt>
        <dd>{coffeine}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  )
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  )
}

