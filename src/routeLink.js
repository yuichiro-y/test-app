import { BrowserRouter ,Routes, Route} from "react-router-dom"
import App from "./App"
import { Header } from "./Header"
import { TopPage } from "./TopPage"


export const RouteLink = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<TopPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}