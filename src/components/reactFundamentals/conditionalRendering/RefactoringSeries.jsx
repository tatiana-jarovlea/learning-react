// Task 3 - Refactor a series of ? : to if and variables

import PropTypes from 'prop-types';

function Drink({ name }) {
  let partOfPlant = 'leaf';
  let caffeine = '15–70 mg/cup';
  let age = '4,000+ years';

  if (name === 'coffee') {
    partOfPlant = 'bean';
    caffeine = '80–185 mg/cup';
    age = '1,000+ years';
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{partOfPlant}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeine}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

// Adding prop types validation
Drink.propTypes = {
  name: PropTypes.string.isRequired,
};

export const DrinkList = () => {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}

