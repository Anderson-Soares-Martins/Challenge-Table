import { Dispatch, SetStateAction } from 'react';
import { CheckboxSelect } from './components/Checkbox';
import { ContainerCard, FilterColumns, FilterLinesPerPage, Text } from './styles';
interface DataProps {
  activeFilters: {
    defaultLinesPerPage: boolean;
    fiftyLinesPerPage: boolean;
    userNameSelected: boolean;
    emailSelected: boolean;
    companyNameSelected: boolean;
    accessProfileSelected: boolean;
  };
  setActiveFilters: {
    setDefaultLinesPerPage: Dispatch<SetStateAction<boolean>>;
    setFiftyLinesPerPage: Dispatch<SetStateAction<boolean>>;
    setUserNameSelected: Dispatch<SetStateAction<boolean>>;
    setEmailSelected: Dispatch<SetStateAction<boolean>>;
    setCompanyNameSelected: Dispatch<SetStateAction<boolean>>;
    setAccessProfileSelected: Dispatch<SetStateAction<boolean>>;
  };
}

export function CardFilter({ activeFilters, setActiveFilters }: DataProps) {
  return (
    <ContainerCard>
      <FilterLinesPerPage>
        <Text>Linhas por páginas</Text>
        <CheckboxSelect
          label='Padrão'
          active={activeFilters.defaultLinesPerPage}
          setActive={setActiveFilters.setDefaultLinesPerPage}
        />
        <CheckboxSelect
          label='50 linhas'
          active={activeFilters.fiftyLinesPerPage}
          setActive={setActiveFilters.setFiftyLinesPerPage}
        />
      </FilterLinesPerPage>
      <FilterColumns>
        <Text>Colunas</Text>
        <CheckboxSelect
          label='Usuário'
          active={activeFilters.userNameSelected}
          setActive={setActiveFilters.setUserNameSelected}
        />
        <CheckboxSelect
          label='E-mail'
          active={activeFilters.emailSelected}
          setActive={setActiveFilters.setEmailSelected}
        />
        <CheckboxSelect
          label='Cliente'
          active={activeFilters.companyNameSelected}
          setActive={setActiveFilters.setCompanyNameSelected}
        />
        <CheckboxSelect
          label='Perfil de acesso'
          active={activeFilters.accessProfileSelected}
          setActive={setActiveFilters.setAccessProfileSelected}
        />
      </FilterColumns>
    </ContainerCard>
  );
}
