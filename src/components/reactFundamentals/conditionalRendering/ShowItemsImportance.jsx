// Task 2 - Show the item importance with &&

// eslint-disable-next-line react/prop-types
function Item({ name, importance }) {
  return (
    <li className="item">
      {name} {importance > 0 && <i>(Importance: {importance}) </i>}
    </li>
  )
}

export const PackingList = () => {
  return (
    <section>
      <h1>Sally Ride&apos;s Packing List</h1>
      <ul>
        <Item importance={9} name="Space suit" />
        <Item importance={0} name="Helmet with a golden leaf" />
        <Item importance={6} name="Photo of Tam" />
      </ul>
    </section>
  )
}

