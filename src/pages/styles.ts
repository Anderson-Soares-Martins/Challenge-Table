import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
export const Table = styled.div`
  flex: 1;
  display: flex;
  margin: 40px;
  flex-direction: column;

  border: none solid 1px;
  border-radius: 10px;
  overflow: auto;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.shadow};

  background-color: ${({ theme }) => theme.colors.primary};
  &::-webkit-scrollbar {
    width: 6px; /* width of the entire scrollbar */
  }
  &::-webkit-scrollbar-track {
    margin: 25px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.tertiary}; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 2px solid ${({ theme }) => theme.colors.background}; /* creates padding around scroll thumb */
  }
`;
export const TableHead = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export const TableBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-weight: bold;
`;
export const Text = styled.p`
  overflow: hidden;
`;

const FlexContainerBase = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  & > ${Title}:nth-child(2) {
    flex: 2;
  }
  & > ${Text}:nth-child(2) {
    flex: 2;
  }
`;

export const RowTitle = styled(FlexContainerBase)``;

export const Row = styled(FlexContainerBase)`
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
`;
