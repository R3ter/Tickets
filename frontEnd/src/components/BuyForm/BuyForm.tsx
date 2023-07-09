import { EmailIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  ModalFooter,
  Stack,
  useNumberInput,
} from "@chakra-ui/react";
import { Field, Form, Formik, useField } from "formik";
import { useState } from "react";
import Popup from "../Popup/Popup";
import ValidateCode from "../ValidateCode/ValidateCode";

interface IProps {
  formValue: {
    email: string;
    quantity: number;
  };
}
const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
export default function ({ close }: { close: () => void }) {
  const [inputEmail, setInputEmail] = useState("");
  const handleInputChange = (e: any) => setInputEmail(e.target.value);
  const [numError, setNumError] = useState("");

  const isError = {
    email: !validateEmail(inputEmail),
  };
  return (
    <Stack spacing={3}>
      <Formik
        initialValues={{ email: "", num: 0 }}
        onSubmit={(values, actions) => {
          if (!values.num) {
            setNumError("Quantity cant be 0 or empty!!");
          } else {
            setNumError("");
          }
          //   if (!numError && !isError.email) close();
        }}
      >
        {(props) => (
          <Form>
            <Field name="email">
              {({ field, form }: any) => (
                <FormControl isInvalid={isError.email}>
                  <FormLabel>Email</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <EmailIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                      onInput={handleInputChange}
                      value={inputEmail}
                      placeholder="Email"
                      {...field}
                    />
                  </InputGroup>

                  {!isError ? (
                    <FormHelperText>
                      We are going to send the validation code to this Email.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>
                      {inputEmail === ""
                        ? "Email is required."
                        : "This Email is not valid!"}
                    </FormErrorMessage>
                  )}
                </FormControl>
              )}
            </Field>
            <Field name="num">
              {({ field, form }: any) => {
                const {
                  getInputProps,
                  getIncrementButtonProps,
                  getDecrementButtonProps,
                } = useNumberInput({
                  name: field.name,
                  min: 1,
                  max: 100,
                  onChange: (valueAsString, valueAsNumber) => {
                    form.setFieldValue(field.name, valueAsNumber);
                  },
                });
                const inputProps = getInputProps();
                const incButtonProps = getIncrementButtonProps();
                const decButtonProps = getDecrementButtonProps();

                return (
                  <FormControl isInvalid={!!numError}>
                    <FormLabel>Quantity</FormLabel>
                    <InputGroup maxWidth={200}>
                      <Button {...decButtonProps}>-</Button>
                      <Input
                        placeholder="Quantity"
                        {...field}
                        {...inputProps}
                        value={inputProps.value}
                      />
                      <Button {...incButtonProps}>+</Button>
                    </InputGroup>
                    <FormErrorMessage>{numError}</FormErrorMessage>
                  </FormControl>
                );
              }}
            </Field>
            <ModalFooter>
              <Popup
                secondary
                title="Validation"
                Form={ValidateCode}
                canOpen={() => !numError && !isError.email}
              />
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Stack>
  );
}
