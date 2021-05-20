import { ChakraProvider } from "@chakra-ui/react"
import Form from "./components/Form/Form"

function App() {
  return (
    <ChakraProvider>
      <Form />
    </ChakraProvider>
  );
}

export default App;
