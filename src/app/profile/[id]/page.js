import { useSearchParams } from "next/navigation"

async function getPostById(id) {
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "GET",
        next: {
            revalidate: 10
        }
    })
    return res.json()
}

export default async function ProfileId({ params, useSearchParams }) {
    const profile = await getPostById(params.id);


    return (
        <div>PROFILE POST
            {profile && <p>
                {profile.title}
            </p>
            }
        </div>
    )
}