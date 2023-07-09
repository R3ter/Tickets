import {
  Button,
  FormControl,
  HStack,
  PinInput,
  PinInputField,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export default ({ close }: { close: () => void }) => {
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const handleClear = async () => {
    setError(true);
    setValue("");
    close();
  };
  return (
    <div>
      <HStack>
        <FormControl>
          <PinInput
            placeholder="X"
            isInvalid={error}
            onChange={(v) => setValue(v)}
            onComplete={handleClear}
            value={value}
          >
            <PinInputField style={{ margin: "10px" }} />
            <PinInputField style={{ margin: "10px" }} />
            <PinInputField style={{ margin: "10px" }} />
            <PinInputField style={{ margin: "10px" }} />
          </PinInput>
          <Button
            onClick={() => {
              setError(false);
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
