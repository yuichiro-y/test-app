import { BrowserRouter ,Routes, Route} from "react-router-dom"
import App from "./App"
import { TopPage } from "./TopPage"
import { PostDetail } from "./Detail"

export const RouteLink = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<TopPage />}/>
            <Route path="posts/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}