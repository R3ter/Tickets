import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Text,
  Stack,
} from "@chakra-ui/react";
import { PasswordField } from "../components/loginComponents/PasswordField";
import { Link } from "react-router-dom";

export default () => (
  <Container
    maxW="lg"
    py={{ base: "12", md: "24" }}
    px={{ base: "0", sm: "8" }}
  >
    <Stack spacing="8">
      <Stack spacing="6">
        <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
          <Heading size={{ base: "xs", md: "sm" }}>
            Log in to your account
          </Heading>
          <Text color="fg.muted">
            Don't have an account? <Link to="/register">Sign up</Link>
          </Text>
        </Stack>
      </Stack>
      <Box
        py={{ base: "0", sm: "8" }}
        px={{ base: "4", sm: "10" }}
        bg={{ base: "gray.700", sm: "bg.surface" }}
        boxShadow={{ base: "none", sm: "2xl" }}
        borderRadius={{ base: "none", sm: "xl" }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            <PasswordField />
          </Stack>
          <HStack justify="space-between"></HStack>
          <Stack spacing="6">
            <Button bgColor={"green.600"}>Sign in</Button>
            <HStack>
              <Divider />
            </HStack>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
);
