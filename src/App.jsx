import Header from "./component/Header";
import { useRoutes } from "react-router";
import AllPage from "./pages/AllPage";
import { Provider } from 'react-redux';
import store from "./ReduxStore/store/store";



function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        {useRoutes(AllPage())}
      </Provider>
    </>
  );
}

export default App;
