import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  font-family: 'Roboto',sans-serif;
  font-weight: 700;

  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;

  margin-bottom: 2rem;
  padding: 0 1rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

  .header {
    display: flex;
    justify-content: center;
    flex: 1;
    max-width: 80rem;
   

    .buttons{
      display: flex;
      flex: 3;
      align-items: center;
      margin-right:2rem;
      gap: 1rem;

    }

    .iconHamburguer{
      display: none;
    }
    
    @media (max-width: 700px) {
      
      .iconHamburguer{
        display: flex;
        cursor: pointer;
        font-size: 2rem;
        
      }
      
      .buttons{
          flex: 2;
          justify-content: center;
          
      }

      .active{
        display: none;
      }

      .button-receipt{
        background-color: transparent;
        
        
      }
 }
  }


`;

export const Logo = styled.div`
  display: flex;
  cursor: pointer;

  h1 {
    font-size: 25.11px;
    height: 29px;
  }

  > svg {
    font-size: 16px;
    margin-right: 12px;
  }

`;

export const Logout = styled.button`
  border: none;
  background: none;

  margin-left: 2rem;

`;
