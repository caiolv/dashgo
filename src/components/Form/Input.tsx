import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}

export function Input({ name, label, ...rest } : InputProps) {
    return (
        <FormControl>
            { !!label && <FormLabel forHtml="email">{label}</FormLabel>}
            <ChakraInput
              name={name}
              id={name}
              focusBorderColor="pink.500"
              bg="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}
              size="lg"
              {...rest}
            />
          </FormControl>
    );
}