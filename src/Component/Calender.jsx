// import React, { useState } from 'react'
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction'
// import Topnav from './Topnav'
// import calender from '../assets/Images/calendar.png'

// const Calender = () => {
//   const [events, setEvents] = useState([
//     {
//       id: '1',
//       title: 'Client Meeting',
//       start: '2025-12-20T10:00:00',
//       end: '2025-12-20T11:00:00',
//       backgroundColor: '#3b82f6',
//     },
//   ])

//   const [showModal, setShowModal] = useState(false)
//   const [selectedDate, setSelectedDate] = useState(null)

//   const [formData, setFormData] = useState({
//     title: '',
//     startTime: '',
//     endTime: '',
//     inviteEmail: '',
//   })

//   // Click on date
//   const handleDateClick = (info) => {
//     setSelectedDate(info.dateStr)
//     setShowModal(true)
//   }

//   // Add Event + Send Email
//   const handleAddEvent = async () => {
//     if (!formData.title || !formData.startTime || !formData.endTime) {
//       alert('Please fill all fields')
//       return
//     }

//     const newEvent = {
//       id: String(events.length + 1),
//       title: formData.title,
//       start: `${selectedDate}T${formData.startTime}`,
//       end: `${selectedDate}T${formData.endTime}`,
//       backgroundColor: '#22c55e',
//     }

//     setEvents([...events, newEvent])
//     setShowModal(false)

//     await fetch('http://localhost:5000/send-invite', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         title: formData.title,
//         date: selectedDate,
//         startTime: formData.startTime,
//         endTime: formData.endTime,
//         email: formData.inviteEmail,
//       }),
//     })

//     setFormData({
//       title: '',
//       startTime: '',
//       endTime: '',
//       inviteEmail: '',
//     })
//   }

//   return (
//     <>
//       <Topnav
//         title="Calendar"
//         subtitle="Schedule, track, and manage your meetings."
//         icon={calender}
//       />

//       <div className="bg-white p-3 sm:p-4 rounded-lg shadow overflow-x-auto">
//         <FullCalendar
//           plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//           initialView="dayGridMonth"
//           headerToolbar={{
//             left: 'prev,next today',
//             center: 'title',
//             right: 'dayGridMonth,timeGridWeek,timeGridDay',
//           }}
//           events={events}
//           dateClick={handleDateClick}
//           editable
//           selectable
//           height="auto"
//         />
//       </div>

//       {/* MODAL */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-3">
//           <div className="bg-white w-full max-w-[400px] rounded-lg p-5 sm:p-6">
//             <h2 className="text-lg font-semibold mb-4">Add Meeting</h2>

//             <input
//               type="text"
//               placeholder="Meeting Title"
//               className="w-full border p-2 rounded mb-3"
//               value={formData.title}
//               onChange={(e) =>
//                 setFormData({ ...formData, title: e.target.value })
//               }
//             />

//             <label className="text-sm">Start Time</label>
//             <input
//               type="time"
//               className="w-full border p-2 rounded mb-3"
//               value={formData.startTime}
//               onChange={(e) =>
//                 setFormData({ ...formData, startTime: e.target.value })
//               }
//             />

//             <label className="text-sm">End Time</label>
//             <input
//               type="time"
//               className="w-full border p-2 rounded mb-3"
//               value={formData.endTime}
//               onChange={(e) =>
//                 setFormData({ ...formData, endTime: e.target.value })
//               }
//             />

//             <input
//               type="email"
//               placeholder="Invite Email"
//               className="w-full border p-2 rounded mb-4"
//               value={formData.inviteEmail}
//               onChange={(e) =>
//                 setFormData({ ...formData, inviteEmail: e.target.value })
//               }
//             />

//             <div className="flex flex-col sm:flex-row justify-end gap-2">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="border px-4 py-2 rounded w-full sm:w-auto"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleAddEvent}
//                 className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto"
//               >
//                 Add Meeting
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default Calender

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
      backgroundColor: '#3b82f6',
    },
  ])

  const [showModal, setShowModal] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)

  const [formData, setFormData] = useState({
    title: '',
    startTime: '',
    endTime: '',
    inviteEmail: '',
  })

  // 🔹 Detect mobile screen
  const isMobile = window.innerWidth < 640

  // Click on date
  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr)
    setShowModal(true)
  }

  // Add Event
  const handleAddEvent = async () => {
    if (!formData.title || !formData.startTime || !formData.endTime) {
      alert('Please fill all fields')
      return
    }

    const newEvent = {
      id: String(events.length + 1),
      title: formData.title,
      start: `${selectedDate}T${formData.startTime}`,
      end: `${selectedDate}T${formData.endTime}`,
      backgroundColor: '#22c55e',
    }

    setEvents([...events, newEvent])
    setShowModal(false)

    await fetch('http://localhost:5000/send-invite', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: formData.title,
        date: selectedDate,
        startTime: formData.startTime,
        endTime: formData.endTime,
        email: formData.inviteEmail,
      }),
    })

    setFormData({
      title: '',
      startTime: '',
      endTime: '',
      inviteEmail: '',
    })
  }

  return (
    <>
      <Topnav
        title="Calendar"
        subtitle="Schedule, track, and manage your meetings."
        icon={calender}
      />

      <div className="bg-white p-4 rounded-lg shadow overflow-x-auto">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={
            isMobile
              ? {
                  left: 'prev,next',
                  center: 'title',
                  right: 'today',
                }
              : {
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay',
                }
          }
          footerToolbar={
            isMobile
              ? {
                  center: 'dayGridMonth,timeGridWeek,timeGridDay',
                }
              : false
          }
          events={events}
          dateClick={handleDateClick}
          editable
          selectable
          height="auto"
        />
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-[400px] rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Add Meeting</h2>

            <input
              type="text"
              placeholder="Meeting Title"
              className="w-full border p-2 rounded mb-3"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />

            <label className="text-sm">Start Time</label>
            <input
              type="time"
              className="w-full border p-2 rounded mb-3"
              value={formData.startTime}
              onChange={(e) =>
                setFormData({ ...formData, startTime: e.target.value })
              }
            />

            <label className="text-sm">End Time</label>
            <input
              type="time"
              className="w-full border p-2 rounded mb-3"
              value={formData.endTime}
              onChange={(e) =>
                setFormData({ ...formData, endTime: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Invite Email"
              className="w-full border p-2 rounded mb-4"
              value={formData.inviteEmail}
              onChange={(e) =>
                setFormData({ ...formData, inviteEmail: e.target.value })
              }
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="border px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddEvent}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Add Meeting
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Calender

