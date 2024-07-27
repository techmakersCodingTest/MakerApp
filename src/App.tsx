import { BrowserRouter, Routes, Route } from "react-router-dom"
import Authenticator from "./components/core/Authenticator"
import MainLayout from "./components/layout/MainLayout"
import HomePage from "./pages/virtual-assistant/VirtualAssistantPage"
import { routes } from "./routes"


const App = () => {
  return (
    <Authenticator>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {routes}
          </Route>
        </Routes>
      </BrowserRouter>
    </Authenticator>
  )
}

export default App