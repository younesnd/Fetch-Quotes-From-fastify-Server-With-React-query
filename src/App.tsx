import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import FetchTopQuotes from './components/QuoteComponents/FetchTopQuotes'
import UpdateQuotes from './components/QuoteComponents/UpdateQuotes'
import 'react-toastify/dist/ReactToastify.css'
const queryClient = new QueryClient()
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App mx-auto max-w-6xl text-center my-8">
          <h1 className="font-semibold text-2xl">
            React - The Road To Enterprise
          </h1>
          <UpdateQuotes />
          <FetchTopQuotes />
          
        </div>
      </QueryClientProvider>
    </>
  )
}
export default App
