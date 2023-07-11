import { useMutation, useQuery } from "@apollo/client";
import {
  Button,
  FormControl,
  HStack,
  PinInput,
  PinInputField,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { SEND_CODE } from "../../gql/queries";
import { checkCode } from "../../gql/Mutations";

export default ({ close }: { close: () => void }) => {
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const handleClear = async () => {
    mutate({ variables: { code: value } });
  };
  const { loading, refetch } = useQuery(SEND_CODE);
  const [mutate, { data: checkData, loading: checkLoading }] =
    useMutation(checkCode);
  console.log(checkData);
  if (checkData && checkData.data === false) {
    setValue("");
  }
  return (
    <div>
      <HStack>
        <FormControl>
          {checkLoading ? (
            <Spinner color="red.500" />
          ) : (
            <PinInput
              placeholder="X"
              isInvalid={checkData}
              onChange={(v) => setValue(v)}
              onComplete={handleClear}
              value={value}
            >
              <PinInputField style={{ margin: "10px" }} />
              <PinInputField style={{ margin: "10px" }} />
              <PinInputField style={{ margin: "10px" }} />
              <PinInputField style={{ margin: "10px" }} />
            </PinInput>
          )}
          <Button
            isLoading={loading}
            onClick={() => {
              setError(false);
              refetch();
            }}
            style={{ marginLeft: "10px" }}
          >
            Re-Send code
          </Button>
        </FormControl>
      </HStack>
      {error && <Text color={"red.300"}>Code is not valid</Text>}
    </div>
  );
};
