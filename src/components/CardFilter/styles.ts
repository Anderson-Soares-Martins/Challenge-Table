import styled from 'styled-components';

export const ContainerCard = styled.div`
  position: absolute;
  right: 40px;
  top: 70px;
  padding: 10px 20px;

  display: flex;
  flex: 1;
  z-index: 1;

  flex-direction: column;

  border: none solid 1px;
  border-radius: 10px;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.shadow};

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const FilterLinesPerPage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
`;

export const Text = styled.p`
  flex: 1;
  margin: 10px 0;
  font-weight: bold;
`;

export const FilterColumns = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
`;
