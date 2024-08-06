
import ComposeProvider from "./providers/ComposeProvider";
import rootProvider from "./providers/rootProvider";

const App = () => {

  return (
    <ComposeProvider components={rootProvider}>
        Hello
    </ComposeProvider>
  );
};

export default App;
