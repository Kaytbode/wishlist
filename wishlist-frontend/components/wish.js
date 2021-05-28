import { useRouter } from 'next/router'

export default function Edit() {
    const router = useRouter();
    const {query} = router;

    const editAWish = async event => {
      event.preventDefault()
      
      const res = await fetch(
        `http://localhost:3000/api/wishlist/${query.id}`,
        {
          body: JSON.stringify({
            name: event.target.name.value,
            description: event.target.description.value
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'PUT'
        }
      )
  
      const result = await res.json()
      console.log(result)

      router.push('/allwishes')

      event.target.reset()
    }

    return (
        <form onSubmit={editAWish}>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" name="name" class="form-control" id="name" aria-describedby="nameHelp" placeholder={query.name} required/>
                <div id="nameHelp" class="form-text">What would you name your wish?</div>
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <input type="text" name="description" class="form-control" id="description" aria-describedby="descriptionHelp" placeholder={query.description} required/>
                <div id="descriptionHelp" class="form-text">Describe your wish in a short sentence.</div>
            </div>
            <button type="submit" class="btn btn-primary">Edit</button>
        </form>
    )
}

