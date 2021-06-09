import { useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useData } from '../global-stores/useData';
import MainScreen from '../pages/landing';
import { Loader } from '../pages/landing/ui/Loader';
import { loadData } from '../services/loaddata.service';
export const AppRouter: React.FC = () => {
  const { works, cards, loadState } = useData(state => state);

  const load = useCallback(async () => {
    const data = await loadData();
    data && loadState(data.works, data.cards);
  }, [loadState]);

  useEffect(() => {
    load();
  }, [load]);

  if (!works || !cards) return <Loader />;
  if (works.length === 0 || works.length === 0) return <Loader />;
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
