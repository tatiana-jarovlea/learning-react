// Task 1 - Use the conditional operator (cond ? a : b) to render a ❌ if isPacked isn’t true.

// eslint-disable-next-line react/prop-types
function Item({name, isPacked}) {
  return (
    <li className="item">
      {name} {isPacked ? '✅' : '❌'}
    </li>
  )
}

export const FlagRendering = () => {
  return (
    <section>
      <h1>Sally Rides Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  )
}

