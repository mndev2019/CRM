import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Dashboard from './Pages/Dashboard'
import CreateLead from './Pages/Lead/CreateLead'
import ViewLead from './Pages/Lead/ViewLead'
import CreateContact from './Pages/Contact/CreateContact'
import ViewContact from './Pages/Contact/ViewContact'
import CreateAccount from './Pages/Accounts/CreateAccount'
import ViewAccount from './Pages/Accounts/ViewAccount'
import CreateTask from './Pages/Activity/Task/CreateTask'
import ViewTask from './Pages/Activity/Task/ViewTask'
import ViewMeeting from './Pages/Activity/Meeting/ViewMeeting'
import CreateMeeting from './Pages/Activity/Meeting/CreateMeeting'
import CreateCall from './Pages/Activity/Call/CreateCall'
import ViewCall from './Pages/Activity/Call/ViewCall'
import Profile from './Pages/Profile'
import CreateDeal from './Pages/Deals/CreateDeal'
import ViewDeal from './Pages/Deals/ViewDeal'
import DealDetail from './Pages/Deals/DealDetail'
import SalesAnalytics from './Pages/SalesAnalytics'
import ViewCampaigns from './Pages/Marketing/Campaigns/ViewCampaigns'
import CreateCampaigns from './Pages/Marketing/Campaigns/CreateCampaigns'
import ViewLanding from './Pages/Marketing/LandingPage/ViewLanding'
import CreateLanding from './Pages/Marketing/LandingPage/CreateLanding'
import MarketAnalytics from './Pages/Marketing/MarketAnlytics'
import CreateTicket from './Pages/Support/Ticket/CreateTicket'
import ViewTicket from './Pages/Support/Ticket/ViewTicket'
import CreateKnoelwdgeArticle from './Pages/Support/KnowledgeArticle/CreateKnoelwdgeArticle'
import ViewKnowledgeArticle from './Pages/Support/KnowledgeArticle/ViewKnowledgeArticle'
import SupportAnalytics from './Pages/Support/SupportAnalytics'
import AutomationModule from './Pages/Automation/Automation/AutomationModule'
import FieldSales from './Pages/FieldSalesModule/FieldSales/FieldSales'
import WorkFlowModule from './Pages/WorkFlow/WorkFlow/WorkFlowModule'
import ViewSolution from './Pages/Support/Solution/ViewSolution'
import CreateSolution from './Pages/Support/Solution/CreateSolution'
import ViewCase from './Pages/Support/Cases/ViewCase'
import CreateCase from './Pages/Support/Cases/CreateCase'

function App() {
  const ThemeRoutes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/profile' element={<Profile/>}/>
          {/* sales */}
          <Route path='/view-lead' element={<ViewLead />} />
          <Route path='/create-lead' element={<CreateLead />} />
          <Route path='/create-contact' element={<CreateContact />} />
          <Route path='/view-contact' element={<ViewContact />} />
          <Route path='/create-account' element={<CreateAccount />} />
          <Route path='/view-account' element={<ViewAccount />} />
          <Route path='/create-deal' element={<CreateDeal/>}/>
          <Route path='/view-deal' element={<ViewDeal/>}/>
          <Route path='/deal-detail' element={<DealDetail/>}/>
          <Route path='/sales-analytics' element={<SalesAnalytics/>}/>
          {/* Activity */}
          <Route path='/create-task' element={<CreateTask />} />
          <Route path='/view-task' element={<ViewTask />} />
          <Route path='/view-meeting' element={<ViewMeeting />} />
          <Route path='/create-meeting' element={<CreateMeeting />} />
          <Route path='/create-call' element={<CreateCall/>}/>
          <Route path='/view-call' element={<ViewCall/>}/>
          {/* Marketing */}
          <Route path='/view-campaigns' element={<ViewCampaigns/>}/>
          <Route path='/create-campaigns' element={<CreateCampaigns/>}/>
          <Route path='/view-landing' element={<ViewLanding/>}/>
          <Route path='/create-landing' element={<CreateLanding/>}/>
          <Route path='/market-analytics' element={<MarketAnalytics/>}/>
          {/* support */}
          <Route path='/create-ticket' element={<CreateTicket/>}/>
          <Route path='/view-ticket' element={<ViewTicket/>}/>
          <Route path='/create-knowledge' element={<CreateKnoelwdgeArticle/>}/>
          <Route path='/view-knowledge' element={<ViewKnowledgeArticle/>}/>
          <Route path='/support-analytics' element={<SupportAnalytics/>}/>
          <Route path='/view-solution' element={<ViewSolution/>}/>
          <Route path='/create-solution' element={<CreateSolution/>}/>
          <Route path='/view-case' element={<ViewCase/>}/>
          <Route path='/create-case' element={<CreateCase/>}/>
          {/* Automation */}
          <Route path='/automation' element={<AutomationModule/>}/>
          {/* field sales */}
          <Route path='/field-sales' element={<FieldSales/>}/>
          {/* workflow */}
          <Route path='/work-flow' element={<WorkFlowModule/>}/>
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
