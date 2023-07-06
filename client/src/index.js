import React, { createContext } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import App from "components/app/App"

import UserStore from "store/UserStore"

import "./assets/styles/style.scss"
import DeviceStore from "store/DeviceStore"

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore()
  }}>
    <Router>
      <App />
    </Router>
  </Context.Provider>
)
