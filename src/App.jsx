import { Blog, Cards, Footer, Navbar, Timer } from "src/Layouts";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Timer />
        <Cards />
        <Blog />
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
