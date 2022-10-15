import React from 'react'
import Main from './pages'
import { Provider } from 'react-redux'
import { appStore, persistor } from './services/appstore'
import { PersistGate } from 'redux-persist/integration/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import ErrorBoundary from './pages/errorBoundary'

const store = appStore
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <Main />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  )
}

export default App
