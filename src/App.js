import { Route, Switch } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetupsPage'
import FavoritesPage from './pages/FavoritesPage'
import NewMeetupsPage from './pages/NewMeetupsPage'
import Layout from './components/layout/Layout'
function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupsPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
