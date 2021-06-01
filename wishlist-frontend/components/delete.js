import { useRouter } from 'next/router'

export default function Delete({ wish }) {
    const router = useRouter();


    const deleteWish = async event => {
      event.preventDefault()
      
      const res = await fetch(
        `http://localhost:3000/api/wishlist/${wish.id}`,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'DELETE'
        }
      )

      const result = await res.json()
      console.log(result)

      router.push('/allwishes')
    }

    return (
        <form onSubmit={deleteWish}>
            <button type="submit" class="btn btn-danger">Delete Wish</button>
        </form>
    )
}

