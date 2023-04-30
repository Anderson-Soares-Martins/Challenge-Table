import { useState } from 'react';
import {
  Container,
  Table,
  TableHead,
  TableBody,
  Row,
  Options,
  OptionButton,
  ContainerTag,
  AccessProfileTag,
  AccessProfileTagText,
  Header,
  Cell,
  Content,
  CardArea,
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

  const [columnsSelected, setColumnsSelected] = useState({
    user: true,
    email: true,
    client: true,
    accessProfile: true,
  });

  const data: DataProps[] = new Array(60).fill({
    userName: 'ESMEE ALFORD',
    email: 'NOMEDEEMAIL@EMPRESA.COM.BR',
    companyName: 'NOME DA EMPRESA',
    accessProfile: 'NOME DO PERFIL',
  });

  return (
    <>
      <Container
        onClick={() => {
          cardFilterOpen && setCardFilterOpen(false);
        }}
      >
        <Content>
          <Table>
            <TableHead>
              <Row>
                {columnsSelected.user && <Header>USUÁRIO</Header>}
                {columnsSelected.email && <Header>EMAIL</Header>}
                {columnsSelected.client && <Header>CLIENTE</Header>}
                {columnsSelected.accessProfile && <Header>PERFIL DE ACESSO</Header>}
                <Header>
                  <Options>
                    <OptionButton
                      onClick={() => {
                        setCardFilterOpen(!cardFilterOpen);
                      }}
                    >
                      <TbDotsVertical size={25} />
                    </OptionButton>
                  </Options>
                </Header>
              </Row>
            </TableHead>
            <TableBody>
              {data
                .slice(0, defaultLinesPerPage ? 20 : 50)
                .map(({ userName: name, email, companyName, accessProfile }, index) => {
                  return (
                    <Row key={index}>
                      {columnsSelected.user && (
                        <Cell>
                          {name} {index + 21}
                        </Cell>
                      )}
                      {columnsSelected.email && <Cell>{email}</Cell>}
                      {columnsSelected.client && <Cell>{companyName}</Cell>}
                      {columnsSelected.accessProfile && (
                        <Cell>
                          <ContainerTag>
                            <AccessProfileTag>
                              <AccessProfileTagText>{accessProfile}</AccessProfileTagText>
                            </AccessProfileTag>
                          </ContainerTag>
                        </Cell>
                      )}
                      <Cell>
                        <EditOrDelete />
                      </Cell>
                    </Row>
                  );
                })}
            </TableBody>
          </Table>
        </Content>
      </Container>
      {cardFilterOpen && (
        <CardFilter
          activeFilters={columnsSelected}
          defaultLinesPerPage={defaultLinesPerPage}
          setColumnsSelected={setColumnsSelected}
          setDefaultLinesPerPage={setDefaultLinesPerPage}
        />
      )}
    </>
  );
}
