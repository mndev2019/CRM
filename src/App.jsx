import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Dashboard from './Pages/Dashboard'

import Profile from './Pages/Profile/Profile'


import Login from './Pages/Login'
import Password from './Pages/Profile/Password'
import EmailSingnature from './Pages/Profile/EmailSingnature'
import ReportSubscription from './Pages/Profile/ReportSubscription'
import AddLeave from './Pages/Profile/AddLeave'
import CompanyProfile from './Pages/OrganizationSetting/CompanyProfile'
import NotificationSetting from './Pages/Notification/NotificationSetting'
import ViewNotification from './Pages/Notification/ViewNotification'
import RequestHiostry from './Pages/OrganizationSetting/RequestHiostry'
import ViewNeawLead from './Pages/CrmProcessManagement/Leads/ViewNeawLead'
import CreateLead from './Pages/CrmProcessManagement/Leads/CreateLead'
import PendingLead from './Pages/CrmProcessManagement/Leads/PendingLead'
import Coustomer from './Pages/CrmProcessManagement/Leads/Coustomer'

import Task from './Pages/CrmProcessManagement/MyToDos/Task'
import LeadDetail from './Pages/CrmProcessManagement/ClientLeads/LeadDetail'
import EngagedLead from './Pages/CrmProcessManagement/Leads/EngagedLead'
import ViewList from './Pages/CrmProcessManagement/ActionBoard/ViewList'

import CreateTask from './Pages/CrmProcessManagement/MyToDos/CreateTask'
import CreateClientLead from './Pages/CrmProcessManagement/ClientLeads/CreateClientLead'
import CreateAccount from './Pages/CrmProcessManagement/Leads/CreateAccount'
import ShowActivity from './Pages/CrmProcessManagement/Activities/ShowActivity'
import ShowSalesActivity from './Pages/CrmProcessManagement/Activities/ShowSalesActivity'
import CreateSalesActivity from './Pages/CrmProcessManagement/Activities/CreateSalesActivity'
import DocumentGenration from './Pages/CrmProcessManagement/Activities/DocumentGeneration'



function App() {
  const ThemeRoutes = createBrowserRouter(
    createRoutesFromElements(
      <>
       <Route path='/' element={<Navigate to="/login" replace />} />
       <Route path='/login' element={<Login/>}/>

        <Route  path='/'  element={<Layout />}>

          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/password' element={<Password />} />
          <Route path='/email-signature' element={<EmailSingnature />} />
          <Route path='/my-report' element={<ReportSubscription />} />
          <Route path='/my-leaves' element={<AddLeave />} />

          {/* organization setting */}
          <Route path='/company-profile' element={<CompanyProfile />} />
          <Route path='/request-hiostry' element={<RequestHiostry />} />

          {/* Notification */}
          <Route path='/notification-setting' element={<NotificationSetting />} />
          <Route path='/view-notification' element={<ViewNotification />} />
          {/* crm process management */}
          <Route path='/view-new-lead' element={<ViewNeawLead />} />
          <Route path='/create-lead' element={<CreateLead />} />
          <Route path='/pending-lead' element={<PendingLead />} />
          <Route path='/engaged-lead' element={<EngagedLead />} />
          <Route path='/coustomer' element={<Coustomer />} />
          <Route path='/create-account' element={<CreateAccount />} />
          <Route path='/lead-detail' element={<LeadDetail />} />
          <Route path='/create-client-lead' element={<CreateClientLead />} />
          <Route path='/task' element={<Task />} />
          <Route path='/create-task' element={<CreateTask />} />
          <Route path='/view-list' element={<ViewList />} />
          <Route path="/show-activity" element={<ShowActivity />} />
          <Route path='/show-sales-activity' element={<ShowSalesActivity/>}/>
          <Route path='/create-sales-activity' element={<CreateSalesActivity/>}/>
          <Route path='/document-generation' element={<DocumentGenration/>}/>

        </Route>


      </>
    )
  )

  return (
    <>
      <RouterProvider router={ThemeRoutes} />
      {/* <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
    </>
  )
}

export default App
