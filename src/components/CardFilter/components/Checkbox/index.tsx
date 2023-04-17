import { Container, Text, Checkbox } from './styles';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';

interface CheckboxProps {
  label: string;
  active: boolean;
  setActive: (active: boolean) => void;
}

export function CheckboxSelect({ label, active, setActive }: CheckboxProps) {
  function handleCheckboxChange() {
    setActive(!active);
  }

  return (
    <Container>
      {active ? (
        <Checkbox>
          <MdCheckBox size={22} onClick={handleCheckboxChange} />
        </Checkbox>
      ) : (
        <Checkbox>
          <MdCheckBoxOutlineBlank size={22} onClick={handleCheckboxChange} />
        </Checkbox>
      )}
      <Text>{label}</Text>
    </Container>
  );
}
