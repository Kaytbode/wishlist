import Head from 'next/head'

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
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" aria-describedby="nameHelp" required/>
            <div id="nameHelp" class="form-text">What would you name your wish?</div>
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <input type="text" class="form-control" id="description" aria-describedby="descriptionHelp" required/>
            <div id="descriptionHelp" class="form-text">Describe your wish in a short sentence.</div>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </main>
    </div>
  )
}
