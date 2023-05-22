import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex: 1;
  align-items: center;

  background: none;

  border: none;
  border-radius: 5px;
 
  > input {
      width: 100%;
      height: 16px;
      background: transparent;
      border: none;

      gap: 10px;
      padding: 2rem;

      color: ${({ theme }) => theme.COLORS.WHITE};
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
      border: 0;

        @media (max-width: 400px) {
        padding: 2px
      }
    }

    > svg {
      margin-left: 16px;
      min-width: 15px;

      @media (max-width: 400px) {
        margin-left: 4px;
      }
    }



`;