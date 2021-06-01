import Head from 'next/head'
import Link from 'next/link'
import Edit from '../../components/wish'

export default function EditWish() {
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
      <main style = {{ margin: 'auto', marginTop: 100, maxWidth: 400, minWidth: 200 }}>
        <p class="lead text-center">Edit your wish</p>
        <Edit/>
      </main>
    </div>
  )
}
