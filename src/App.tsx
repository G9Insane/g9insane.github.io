
import { Container, MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { Hero } from './components/intro-profile';

function App() {
  return (
    <MantineProvider theme={theme}>
      <Container fluid p={0}
      style={{
        backgroundImage: "linear-gradient(120deg, var(--mantine-color-primary-8) 0%, var(--mantine-color-primary-9) 100%)"
      }}
      >
        <Hero />
      </Container>
    </MantineProvider>
  );
}

export default App
