import Head from 'next/head'
import HomeForm from '../components/home'

export default function Home() {
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
        <HomeForm/>
      </main>
    </div>
  )
}
