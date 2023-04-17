import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const EditButton = styled.button`
  background: transparent;
  padding: 2px;
  margin: 5px;
  border: 0;
  color: ${({ theme }) => theme.colors.edit};
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.tertiaryLight};
    border-radius: 50%;
  }

  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background: transparent;
  padding: 2px;
  margin: 5px;
  border: 0;
  color: ${({ theme }) => theme.colors.delete};
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.tertiaryLight};
    border-radius: 50%;
  }

  cursor: pointer;
`;
