import { Outlet } from "react-router-dom"
import Header from "./components/header/page"
import { Provider } from "react-redux"
import store from "./store/store"
import { Bounce, ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <Provider store={store}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        <Header />
        <Outlet />
      </Provider>
    </>
  )
}

export default App
