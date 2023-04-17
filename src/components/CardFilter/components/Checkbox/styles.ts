import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Text = styled.p`
  font-weight: bold;
  margin: 2px 10px;
`;

export const Checkbox = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.checkbox};

  cursor: pointer;
`;
