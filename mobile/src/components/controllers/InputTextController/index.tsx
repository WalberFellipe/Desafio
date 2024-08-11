import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { ITextInputProps, TextInput } from "../../TextInput";

const InputTextController = <FormType extends FieldValues>({
  control,
  name,
  rules,
  inputType,
  ...textInputProps
}: UseControllerProps<FormType> & ITextInputProps & { inputType?: string }) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (inputType === "email") {
    rules = {
      ...rules,
      pattern: {
        value: emailPattern,
        message: "Por favor, insira um e-mail válido",
      },
    };
  }
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextInput
          {...textInputProps}
          value={field.value}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
};

export { InputTextController };

