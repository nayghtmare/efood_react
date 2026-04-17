import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import Router from './routes/routes'
import Footer from './components/Footer'
import GlobalStyle from './global/globalStyle'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
