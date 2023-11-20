async function getProfileById(id) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "GET",
        next : {
            revalidate : 1000
        }
    })

    return res.json()
}

export default async function ProfilePost({params,useSearchParams}) {
    const profile = await getProfileById(params.id);
    console.log("ddd")

    return (
        <div>PROFILE POST
            {profile &&
                    <p>item.title</p>
            }
        </div>
    )
}