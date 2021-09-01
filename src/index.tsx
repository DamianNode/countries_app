import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CountryListPage from './pages/CountryListPage';
import CountryHolidaysPage from './pages/CountryHolidaysPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
      <Router>
          <div>
            <Switch>
              <Route path="/holidays">
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <CountryHolidaysPage />
                </ErrorBoundary>
              </Route>
              <Route path="/">
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <CountryListPage />
                </ErrorBoundary>
              </Route>
            </Switch>
          </div>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
