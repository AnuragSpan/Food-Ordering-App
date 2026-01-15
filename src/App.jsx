import { Outlet } from "react-router-dom"
import Header from "./components/header/page"
import { Provider } from "react-redux"
import store from "./store/store"

function App() {

  return (
    <>
  <Provider store={store}>
      <Header/>
    <Outlet/>
  </Provider>
    </>
  )
}

export default App
