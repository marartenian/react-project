import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const AddEvent = () => {
    const [form, setForm] = useState({
        title: "",
        composer: "",
        date: "",
        time: "",
        cover: ""
    })
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        console.log(form)
        axios
        .post("http://localhost:3004/events",form)
        .then(res=>{
            console.log(res.data)
            navigate("/")
        })
    }
    return <form onSubmit={handleSubmit}>
        <div>
            <input
                placeholder="title"
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
            />
        </div>
        <div>
            <input
                placeholder="composer"
                value={form.composer}
                onChange={e => setForm({ ...form, composer: e.target.value })}
            />
        </div>
        <div>
            <input
                placeholder="date"
                value={form.date}
                onChange={e => setForm({ ...form, date: e.target.value })}
            />
        </div>
        <div>
            <input
                placeholder="time"
                value={form.time}
                onChange={e => setForm({ ...form, time: e.target.value })}
            />
        </div>
        <div>
            <input
                placeholder="cover"
                value={form.cover}
                onChange={e => setForm({ ...form, cover: e.target.value })}
            />
        </div>
        <button>Save</button>
    </form>

}