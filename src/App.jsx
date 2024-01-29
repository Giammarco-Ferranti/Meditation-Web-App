import { QueryClient, QueryClientProvider } from "react-query";
import Routes from "../src/Routes/App";
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </>
  );
}

export default App;
