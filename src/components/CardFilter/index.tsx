import { Dispatch, SetStateAction } from 'react';
import { ContainerCard, FilterColumns, FilterLinesPerPage, Text } from './styles';
import { Checkbox } from './components/Checkbox';
interface DataProps {
  defaultLinesPerPage: boolean;
  activeFilters: {
    user: boolean;
    email: boolean;
    client: boolean;
    accessProfile: boolean;
  };
  setColumnsSelected: Dispatch<
    SetStateAction<{ user: boolean; email: boolean; client: boolean; accessProfile: boolean }>
  >;
  setDefaultLinesPerPage: Dispatch<SetStateAction<boolean>>;
}

export function CardFilter({
  activeFilters,
  defaultLinesPerPage,
  setColumnsSelected,
  setDefaultLinesPerPage,
}: DataProps) {
  return (
    <ContainerCard>
      <FilterLinesPerPage>
        <Text>Linhas por páginas</Text>
        <Checkbox
          id='default'
          name='padrão'
          label='Padrão'
          checked={defaultLinesPerPage}
          setActive={() => setDefaultLinesPerPage(!defaultLinesPerPage)}
        />
        <Checkbox
          id='fifty'
          name='50 linhas'
          label='50 linhas'
          checked={!defaultLinesPerPage}
          setActive={() => setDefaultLinesPerPage(!defaultLinesPerPage)}
        />
      </FilterLinesPerPage>
      <FilterColumns>
        <Text>Colunas</Text>
        <Checkbox
          id='user'
          name='usuário'
          label='Usuário'
          checked={activeFilters.user}
          setActive={() => {
            setColumnsSelected((prevState) => ({ ...prevState, user: !prevState.user }));
          }}
        />
        <Checkbox
          id='email'
          name='email'
          label='Email'
          checked={activeFilters.email}
          setActive={() => {
            setColumnsSelected((prevState) => ({ ...prevState, email: !prevState.email }));
          }}
        />
        <Checkbox
          id='client'
          name='cliente'
          label='Cliente'
          checked={activeFilters.client}
          setActive={() => {
            setColumnsSelected((prevState) => ({ ...prevState, client: !prevState.client }));
          }}
        />
        <Checkbox
          id='accessProfile'
          name='perfil de acesso'
          label='Perfil de acesso'
          checked={activeFilters.accessProfile}
          setActive={() => {
            setColumnsSelected((prevState) => ({
              ...prevState,
              accessProfile: !prevState.accessProfile,
            }));
          }}
        />
      </FilterColumns>
    </ContainerCard>
  );
}
