import { useForm } from "react-hook-form";
import { InputField } from "./components/form/InputField";
import { Box, Button, Container, Stack } from "@mui/material";

type FormValues = {
  firstName: string;
  lastName: string;
};

function App() {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Box py={4}>
      <Container maxWidth="sm">
        <Stack component="form" onSubmit={handleSubmit(onSubmit)} spacing={2}>
          <InputField
            label="First name"
            placeholder="First Name"
            name="firstName"
            control={control}
          />
          <Button fullWidth variant="contained" type="submit">
            Submit
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
