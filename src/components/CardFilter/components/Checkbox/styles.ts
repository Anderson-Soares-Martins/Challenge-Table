import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4px;
  flex: 1;
`;

export const Label = styled.label`
  flex: 1;
  margin: 2px 8px;
  font-weight: bold;
  cursor: pointer;
`;

export const Input = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.checkbox};
  border-width: 3.5px;
  cursor: pointer;
  transition: 0.2s;

  &:checked {
    position: relative;
    background-color: ${({ theme }) => theme.colors.checkbox};
  }

  &:checked:after {
    content: '';
    position: absolute;
    left: 20%;
    bottom: 18%;
    width: 5px;
    height: 9px;
    border: solid ${({ theme }) => theme.colors.primary};
    border-width: 0 3px 3px 0;
    transform: rotate(40deg);
  }
`;
