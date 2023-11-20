

"use client"

import { useState, useEffect } from "react"


export default function ProfileId({ params, searchParams }) {
    const [profile, setProfile] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)

        const getProfileById = async () => {
            const res = await fetch(`http://localhost:3000/api/products/${params.id}`, {
                method: "GET"
            }, [])

            const data = await res.json()

            if (data) {
                setLoading(false)
                console.log(data.product)
                setProfile(data.product)
            }
        }

        getProfileById()
    }, [])

    return (
        <div>
            {loading && <div>LOADING...</div>}
            {!loading && <div>
                <h1>PROFILE ID {params.id}</h1>
                <p>
                    {profile.map((item) => {
                        return (
                            <div key={item.id}>
                                {item.name}
                            </div>
                        )
                    })}
                </p>
            </div>
            }
        </div>

    )
}