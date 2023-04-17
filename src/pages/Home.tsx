import { useState } from 'react';
import {
  Container,
  Table,
  TableHead,
  RowTitle,
  TableBody,
  Row,
  Title,
  Text,
  Options,
  OptionButton,
  ContainerTag,
  AccessProfileTag,
  AccessProfileTagText,
} from './styles';
import { EditOrDelete } from '../components/EditOrDelete';
import { TbDotsVertical } from 'react-icons/tb';
import { CardFilter } from '../components/CardFilter';

interface DataProps {
  userName: string;
  email: string;
  companyName: string;
  accessProfile: string;
}

export function Home() {
  const [cardFilterOpen, setCardFilterOpen] = useState(false);

  const [defaultLinesPerPage, setDefaultLinesPerPage] = useState(true);
  const [fiftyLinesPerPage, setFiftyLinesPerPage] = useState(false);
  const [userNameSelected, setUserNameSelected] = useState(true);
  const [emailSelected, setEmailSelected] = useState(true);
  const [companyNameSelected, setCompanyNameSelected] = useState(true);
  const [accessProfileSelected, setAccessProfileSelected] = useState(true);
  const columns = ['USUÁRIO', 'EMAIL', 'CLIENTE', 'PERFIL DE ACESSO'];
  const data: DataProps[] = [
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
    {
      userName: 'João',
      email: 'nomeempresa@gmail.com',
      companyName: 'Nome Empresa',
      accessProfile: 'Administrador',
    },
  ];

  return (
    <Container>
      <Table>
        <TableHead>
          <RowTitle>
            {userNameSelected && <Title style={{ flex: 1 }}>{columns[0]}</Title>}
            {emailSelected && <Title style={{ flex: 2 }}>{columns[1]}</Title>}
            {companyNameSelected && <Title style={{ flex: 1 }}>{columns[2]}</Title>}
            {accessProfileSelected && <Title style={{ flex: 1 }}>{columns[3]}</Title>}
            <Options>
              <OptionButton
                onClick={() => {
                  setCardFilterOpen(!cardFilterOpen);
                }}
              >
                <TbDotsVertical size={25} />
              </OptionButton>
            </Options>
          </RowTitle>
        </TableHead>
        <TableBody>
          {data.map(({ userName: name, email, companyName, accessProfile }, index) => (
            <Row key={index}>
              {userNameSelected && <Text style={{ flex: 1 }}>{name}</Text>}
              {emailSelected && <Text style={{ flex: 2 }}>{email}</Text>}
              {companyNameSelected && <Text style={{ flex: 1 }}>{companyName}</Text>}
              {accessProfileSelected && (
                <ContainerTag>
                  <AccessProfileTag>
                    <AccessProfileTagText style={{ flex: 1 }}>
                      {accessProfile}
                    </AccessProfileTagText>
                  </AccessProfileTag>
                </ContainerTag>
              )}
              <EditOrDelete />
            </Row>
          ))}
          {cardFilterOpen && (
            <CardFilter
              activeFilters={{
                defaultLinesPerPage,
                fiftyLinesPerPage,
                userNameSelected,
                emailSelected,
                companyNameSelected,
                accessProfileSelected,
              }}
              setActiveFilters={{
                setDefaultLinesPerPage,
                setFiftyLinesPerPage,
                setUserNameSelected,
                setEmailSelected,
                setCompanyNameSelected,
                setAccessProfileSelected,
              }}
            />
          )}
        </TableBody>
      </Table>
    </Container>
  );
}
