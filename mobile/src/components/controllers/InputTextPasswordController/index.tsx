import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import {
  ITextInputPasswordProps,
  TextInputPassword,
} from "../../TextInputPassword";

const InputTextPasswordController = <FormType extends FieldValues>({
  control,
  name,
  rules,
  ...textInputProps
}: UseControllerProps<FormType> & ITextInputPasswordProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextInputPassword
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

export { InputTextPasswordController };

