import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { EventList } from './EventList'
import { AddEvent } from './AddEvent'
import { Layout } from './Layout'
import { EditEvent } from './EditEvent'
export const RouteConfig = ()=>{
    return <BrowserRouter>
            <Routes>
                <Route path="" element={<Layout/>}>
                    <Route path="" element = {<EventList/>}/>
                    <Route path="add" element = {<AddEvent/>}/>
                    <Route path="event/:id" element={<EditEvent/>}/>
                </Route>
            </Routes>
    </BrowserRouter>
}