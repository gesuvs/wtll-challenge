import { Box } from "@mui/material";
import { Button } from "./components/button/button";
import { Input } from "./components/input/input";
import { Contact } from "./page/contact";
import { ReCaptcha } from "./template/recaptcha";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { object, string, literal, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contactSchema = object({
  name: string()
    .min(2, "Nome é obrigatório")
    .max(30, "Nome pode ter no maximo 30 caracteres"),
  email: string()
    .min(1, "Email é obrigatório")
    .max(20, "Email pode ter no maximo 30 caracteres")
    .email("Email não esta correto"),
  subject: string()
    .min(1, "Assunto é obrigatório")
    .max(50, "Assunto pode ter no maximo 30 caracteres"),
  message: string()
    .min(1, "Mensagem é obrigatório")
    .max(200, "Mensagem pode ter no maximo 30 caracteres"),
  recaptcha: literal(true),
});

type RegisterInput = TypeOf<typeof contactSchema>;

function App() {
  const notify = () => toast.success("Formulario enviado com sucesso !");

  const [output, setOutput] = useState<RegisterInput>();

  const methods = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit: SubmitHandler<RegisterInput> = (values) => {
    setOutput(values);
    notify();
    methods.reset();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <FormProvider {...methods}>
        <Contact
          onSubmit={methods.handleSubmit(
            onSubmit as SubmitHandler<FieldValues>
          )}
        >
          <Box display="flex">
            <Input id="name" name="name" label="Nome" fullWidth />
            <Input
              id="email"
              name="email"
              label="Email"
              type="email"
              inputMode="email"
              fullWidth
            />
          </Box>
          <Input id="subject" name="subject" label="Assunto" />
          <Input
            id="message"
            name="message"
            label="Mensagem"
            multiline
            rows={4}
          />
          <ReCaptcha />
          <Box display="flex" alignSelf="flex-end" marginTop="1rem">
            <Button>ENVIAR</Button>
          </Box>
        </Contact>
      </FormProvider>
      <p
        style={{
          color: "#FFF",
        }}
      >
        {JSON.stringify(output, null, 2)}
      </p>
      <ToastContainer />
    </Box>
  );
}

export default App;
