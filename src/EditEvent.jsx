import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

export const EditEvent = () => {
    const [ev, setEv] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios
            .get("http://localhost:3004/events/" + id)
            .then(res => {
                console.log(res.data)
                setEv(res.data)
            })
    }, [])
    console.log(id)
    const handleSubmit = e => {
        e.preventDefault()
        axios
            .put(`http://localhost:3004/events/${id}`, ev)
            .then(res => {
                console.log(res.data)
                navigate("/")
            })
    }
    return <>
        <h1>Edit</h1>
        {
            ev && <form onSubmit={handleSubmit}>
                <input
                    value={ev.title}
                    onChange={e => setEv({ ...ev, title: e.target.value })}
                />
                <input
                    value={ev.composer}
                    onChange={e => setEv({ ...ev, composer: e.target.value })}
                />
                <input
                    value={ev.time}
                    onChange={e => setEv({ ...ev, time: e.target.value })}
                />
                <input
                    value={ev.date}
                    onChange={e => setEv({ ...ev, date: e.target.value })}
                />
                <input
                    value={ev.type}
                    onChange={e => setEv({ ...ev, type: e.target.value })}
                />
                <input
                    value={ev.cover}
                    onChange={e => setEv({ ...ev, cover: e.target.value })}
                />
                <button type="submit">Save</button>
            </form>
        }

    </>
}

