import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import { routes } from './routes';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map((route, index) => (
          <Route
            key={route.path || index}
            path={route.path}
            element={
              <Suspense
                fallback={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#163300]"></div>
                  </div>
                }
              >
                <route.element />
              </Suspense>
            }
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;