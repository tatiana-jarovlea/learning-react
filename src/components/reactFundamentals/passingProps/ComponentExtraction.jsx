/* eslint-disable react/prop-types */

// Task 1
// Extract a Profile component out of it to reduce the duplication.

import { getImageUrl } from "../utils"

function Profile({ name, imageUrl, profession, awards, discovered }) {
  return (
    <>
      <section className="profile">
        <h2>{name}</h2>
        <img className="avatar" src={getImageUrl(imageUrl)} alt={name} width={70} height={70} />
        <ul>
          <li>
            <b>Profession: </b>
            {profession}
          </li>
          <li>
            <b>Awards: {awards.length} </b>({awards.join(', ')})
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
      </section>
    </>
  )
}

export const Gallery = () => {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageUrl={'szV5sdG'}
        profession="physicist and chemist"
        awards={['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal']}
        discovered="polonium (chemical element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imageUrl={'YfeOqp2'}
        profession="geochemist"
        awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
        discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  )
}

