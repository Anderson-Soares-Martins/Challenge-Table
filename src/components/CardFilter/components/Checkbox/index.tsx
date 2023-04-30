import { Container, Input, Label } from './styles';

interface CheckboxProps {
  id: string;
  name: string;
  label: string;
  setActive?: () => void;
  checked: boolean;
}

export function Checkbox({ id, name, label, setActive, checked }: CheckboxProps) {
  return (
    <Container>
      <Input
        type='checkbox'
        name={name}
        id={id}
        checked={checked}
        onChange={() => {
          setActive && setActive();
        }}
      />
      <Label htmlFor={id}>{label}</Label>
    </Container>
  );
}
