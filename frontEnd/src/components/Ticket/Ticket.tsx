import {
  CardBody,
  Heading,
  CardFooter,
  Card,
  Stack,
  Image,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import Popup from "../Popup/Popup";
import BuyForm from "../BuyForm/BuyForm";
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "../../gql/queries";

export default () => {
  const { data, loading } = useQuery(GET_EVENTS);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "50px",
      }}
    >
      {data &&
        data.getAllEvents.map((e: any) => (
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{e.title}</Heading>
                <Text>{e.description}</Text>
                <Text color="blue.600" fontSize="2xl">
                  ${e.price}
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Popup Form={BuyForm} eventId={e.id} />
            </CardFooter>
          </Card>
        ))}
    </div>
  );
};
