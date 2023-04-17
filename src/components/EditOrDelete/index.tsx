import { Container, EditButton, DeleteButton } from './styles';
import { TbPencil, TbX } from 'react-icons/tb';

export function EditOrDelete() {
  return (
    <Container>
      <EditButton>
        <TbPencil size={25} />
      </EditButton>
      <DeleteButton>
        <TbX size={25} />
      </DeleteButton>
    </Container>
  );
}
