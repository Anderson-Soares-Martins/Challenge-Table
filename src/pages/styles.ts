import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  max-height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.shadow};
  border-radius: 10px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TableHead = styled.thead`
  position: sticky;
  top: 0;

  z-index: 1;
`;

export const TableBody = styled.tbody`
  overflow-y: scroll;
`;

export const Header = styled.th`
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.primary};
  text-align: start;
  padding: 0 10px 0 16px;
`;
export const Cell = styled.td`
  text-align: start;
  padding: 0 10px 0 16px;
`;

export const Row = styled.tr`
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Options = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionButton = styled.button`
  background: transparent;
  padding: 2px;
  margin: 5px;
  border: 0;
  color: ${({ theme }) => theme.colors.text};

  cursor: pointer;
`;

export const ContainerTag = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const AccessProfileTag = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundTag};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.textTag};
`;

export const AccessProfileTagText = styled.p`
  padding: 5px 10px;
  margin: 0;
  font-size: 15px;
  font-weight: 600;
`;

export const CardArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
