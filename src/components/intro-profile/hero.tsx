import {
  ActionIcon,
  Card,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { EnvelopeIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

export default function Hero() {

  const glassEffect={
    backdropFilter: 'blur(12px)',
    background: 'rgba(255, 255, 255, 0.05)', // Transparent effect
  }

  return (
    <Container
      h="100vh"
      w="100%"
      
      pos="relative">
      <Stack
        
        gap={0}
        justify="center"
        align="center"
        h="100%"
        >
          <Card radius="lg" p="xl" 
          c="primary.0"
            style={glassEffect}
          >
          <Title mb="md">
          Hey, I’m{" "}
          <Title
            component="span"
            c="primary">
            Galang Septiadi
          </Title>
          !
        </Title>
        <Text>A freelancer frontend engineer based in Indonesia.</Text>
        <Text>
          I specialize in building scalable, high-performance React
          applications.
        </Text>
          </Card>
        
      </Stack>
      {/* <Group pos="absolute" right={0} top={24}>
      <ActionIcon variant="subtle" size="lg" onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}>
      {colorScheme === 'light' ? <MoonIcon size={24} /> : <SunIcon size={24} />} 
        </ActionIcon>
      </Group> */}
      <Group pos="absolute" right={0} bottom={24} style={{ ...glassEffect, borderRadius: 8 }} p="xs">
      <ActionIcon variant="subtle" size="lg" component="a" href="mailto:galangseptiadi.dev@gmail.com" target="_blank" >
          <EnvelopeIcon size={24} />
        </ActionIcon>
        <ActionIcon variant="subtle" size="lg" component="a" href="https://www.linkedin.com/in/galang-septiadi/" target="_blank">
          <LinkedinLogoIcon size={24} />
        </ActionIcon>
        <ActionIcon variant="subtle" size="lg" component="a" href="https://github.com/G9Insane" target="_blank">
          <GithubLogoIcon size={24} />
        </ActionIcon>
      </Group>
    </Container>
  );
}
