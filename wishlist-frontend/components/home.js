import { useRouter } from 'next/router'

function HomeForm() {
    const router = useRouter();

    const postAWish = async event => {
      event.preventDefault()
  
      const res = await fetch(
        'http://localhost:3000/api/wishlist',
        {
          body: JSON.stringify({
            name: event.target.name.value,
            description: event.target.description.value
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      )
  
      const result = await res.json()

      router.push('/allwishes')

      event.target.reset()
    }
  
    return (
        <form onSubmit={postAWish}>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" name="name" class="form-control" id="name" aria-describedby="nameHelp" required/>
                <div id="nameHelp" class="form-text">What would you name your wish?</div>
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <input type="text" name="description" class="form-control" id="description" aria-describedby="descriptionHelp" required/>
                <div id="descriptionHelp" class="form-text">Describe your wish in a short sentence.</div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default HomeForm;
