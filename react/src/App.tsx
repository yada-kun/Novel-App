
import ComposeProvider from "./providers/ComposeProvider";
import rootProvider from "./providers/rootProvider";
import Router from "./routes/Router";

const App = () => {

  return (
    <ComposeProvider components={rootProvider}>
        <Router />
    </ComposeProvider>
  );
};

export default App;
