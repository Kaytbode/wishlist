import Head from 'next/head'

export default function AllWishes({ wishes }) {
    return (
        <div class="container">
            <Head>
                <title>A Wish List App</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">Wish List</span>
                </div>
            </nav>
            <main>
                <ul>
                    {wishes.reverse().map((wish) => (
                    <li>{wish.name}</li>
                    ))}
                </ul>
            </main>
        </div>
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
