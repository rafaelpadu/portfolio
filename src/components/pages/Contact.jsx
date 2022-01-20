import React, { useState } from "react";
import {
  Box,
  Center,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import PersonalButton from "../layout/Button";
import { init, send } from "emailjs-com";
import { useNavigate } from "react-router-dom";
init("user_YHzRUGsIOTMVvL2FplPOT");

const inialState = {
  name: "",
  email: "",
  message: "",
};
const errors = {
  name: false,
  email: false,
  message: false,
};
const Contact = () => {
  const [values, setValues] = useState(inialState);
  const [error, setError] = useState(errors);
  const [contactNumber, setContactNumber] = useState("000000");
  const toast = useToast();
  const navigate = useNavigate();
  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSubmit()) {
      let finalForm = values;
      generateContactNumber();
      finalForm["contact_number"] = contactNumber;
      console.log(finalForm);
      send("default_service", "template_3krxcxr", values).then(
        function () {
          toast({
            position: "top",
            status: "success",
            title: "Email enviado com sucesso!",
            isClosable: true,
          });
          setTimeout(() => navigate("/"), 1500);
        },
        function (error) {
          toast({
            position: "top",
            status: "error",
            title:
              "Ocorreu um erro no envio do email, tente novamente mais tarde!",
            isClosable: true,
          });
        }
      );
    }
  };
  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  function validateSubmit(e) {
    let response = true;
    if (!values.name) {
      setError((error) => ({ ...error, name: true }));
      response = false;
    } else {
      setError((error) => ({ ...error, name: false }));
    }
    if (!values.email) {
      setError((error) => ({ ...error, email: true }));
      response = false;
    } else {
      setError((error) => ({ ...error, email: false }));
    }
    if (!values.message) {
      setError((error) => ({ ...error, message: true }));
      response = false;
    } else {
      setError((error) => ({ ...error, message: false }));
    }
    console.log(error);
    return response;
  }
  return (
    <Center>
      <Box w="60%" margin="6rem 0 8rem 0">
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={error.name}>
            <FormLabel htmlFor="name">Nome</FormLabel>
            <Input
              value={values.name}
              onChange={handleChange}
              name="name"
              type="text"
            />

            {!error.name ? (
              <FormHelperText>Insira seu nome completo</FormHelperText>
            ) : (
              <FormErrorMessage>O nome é obrigatório!</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={error.email}>
            <FormLabel htmlFor="email" marginTop="1.5rem">
              E-mail
            </FormLabel>
            <Input
              id="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              name="email"
            />

            {!error.email ? (
              <FormHelperText>Insira seu e-mail</FormHelperText>
            ) : (
              <FormErrorMessage>O e-mail é obrigatório!</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={error.message}>
            <FormLabel htmlFor="text" marginTop="1.5rem">
              Mensagem
            </FormLabel>
            <Textarea
              id="message"
              type="text"
              value={values.message}
              onChange={handleChange}
              name="message"
              placeholder="Digite sua mensagem"
              size="lg"
              h="150px"
            />

            {error.message && (
              <FormErrorMessage>
                O campo mensagem é obrigatório!
              </FormErrorMessage>
            )}
          </FormControl>

          <Center>
            <PersonalButton
              type="submit"
              variant="ghost"
              width="100%"
              margin="3rem 0 0 0"
              buttonText="Enviar"
            />
          </Center>
        </form>
      </Box>
    </Center>
  );
};

export default Contact;
