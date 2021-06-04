import { useRouter } from 'next/router'
import { useState } from 'react'

function HomeForm() {
    const router = useRouter();

    const [message, setMessage] = useState('');

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
      
      const result = await res.json();

      const { error } = result;

      if(error) {
        setMessage(error);
        router.push('/');
      }

      else {
        router.push('/allwishes')
      }

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
            <p>{message}</p>
            <div class="d-grid gap-2 col-6 mx-auto" style={{ marginTop: 40 }}>
                <button type="submit" class="btn btn-lg btn-success">Create a Wish</button>
            </div>
        </form>
    )
}

export default HomeForm;
