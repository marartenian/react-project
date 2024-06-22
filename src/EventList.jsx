import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const EventList = () => {
  const [events, setEvents] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:3004/events')
      .then(res => {
        setEvents(res.data)
      })
  }, [])

    const handleDelete = (id)=>{
      axios
      .delete(`http://localhost:3004/events/${id}`)
      .then(()=>{
        setEvents(events.filter(event => event.id !== id))
      })
      .catch(error =>{
        console.log("errror!!!",err);
      })
    }

  return <>
    <h3>Event List</h3>
    <div className="list">
      {
        events.map(elm => <div key={elm.id}>
          <img src={elm.cover} />
          <p>{elm.title}<small>{" " + elm.type}</small></p>
          <p>{elm.date} {elm.time}</p>
          <p>{elm.composer}</p>
          <Link to={"/event/" + elm.id}>Details</Link>
          <button onClick = {()=>handleDelete(elm.id)}>Delete</button>
        </div>)
      }
    </div>
  </>
}