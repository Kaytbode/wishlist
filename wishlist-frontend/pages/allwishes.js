import Head from 'next/head'
import Link from 'next/link'
import Delete from '../components/delete'


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
                    <Link href="/">
                        <a class="navbar-brand mb-0 h1">Wish List</a>
                    </Link>
                    <Link href="/allwishes">
                        <a class="navbar-brand">All Wishes</a>
                    </Link>
                </div>
            </nav>
            <main style={{ marginTop: 50, minWidth: 230 }}>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {wishes.reverse().map((wish) => (
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">{wish.name}</h5>
                                    <p class="card-text">{wish.description}</p>
                                    <div class="row align-items-start">
                                        <div class="col">
                                            <Link href={{
                                                pathname: '/wish/[id]',
                                                query: { id: wish.id, name: wish.name, description: wish.description}
                                            }}>
                                                <button class="btn btn-light">Edit Wish</button>
                                            </Link>
                                        </div>
                                        <div class="col">
                                            <Delete wish = {wish}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/wishlist/allwishes')

    const { wishes } = await res.json();
  
    return {
      props: {
        wishes,
      },
    }
}
