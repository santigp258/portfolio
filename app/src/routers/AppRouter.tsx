import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import MainScreen from '../pages/landing';
export const AppRouter: React.FC = () => {
  return (
    <Router>
      <main className="font-metropolis">
        <Switch>
          <Route component={MainScreen} exact path="/" />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};
