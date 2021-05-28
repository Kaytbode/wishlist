function AllWishes({ wishes }) {
    return (
      <ul>
        {wishes.map((wish) => (
          <li>{wish.name}</li>
        ))}
      </ul>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/wishlist/allwishes')
    const wishes = await res.json()

    console.log(wishes)
  
    return {
      props: {
        wishes,
      },
    }
}

export default AllWishes