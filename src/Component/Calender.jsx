import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import Topnav from './Topnav'
import calender from '../assets/Images/calendar.png'

const Calender = () => {
    const [events, setEvents] = useState([
        {
            id: '1',
            title: 'Client Meeting',
            start: '2025-12-20T10:00:00',
            end: '2025-12-20T11:00:00',
            backgroundColor: '#3b82f6', // blue
        },
        {
            id: '2',
            title: 'Follow-up Call',
            start: '2025-12-21',
            backgroundColor: '#22c55e', // green
        },
    ])

    // Click on date → Add event
    const handleDateClick = (info) => {
        const title = prompt('Enter event title')

        if (title) {
            setEvents([
                ...events,
                {
                    id: String(events.length + 1),
                    title,
                    start: info.dateStr,
                    backgroundColor: '#f59e0b', // yellow
                },
            ])
        }
    }

    // Click on event → Delete
    const handleEventClick = (info) => {
        if (window.confirm(`Delete "${info.event.title}"?`)) {
            info.event.remove()
        }
    }

    return (
        <>
            <Topnav
                title="Calendar"
                subtitle="Schedule, track, and manage your meetings, follow-ups, and tasks in one place."
                icon={calender}
            />

            <div className="bg-white p-4 rounded-lg shadow">
               

                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay',
                    }}
                    events={events}
                    selectable={true}
                    editable={true}
                    dateClick={handleDateClick}
                    eventClick={handleEventClick}
                    height="auto"
                />
            </div>
        </>


    )
}

export default Calender
