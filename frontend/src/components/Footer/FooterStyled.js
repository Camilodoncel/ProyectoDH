import styled from "styled-components";

export const FooterStyled = styled.footer`
  margin-top: 30px;
  border: 1.4px solid rgb(34,195,155);
  font-family: 'Poppins', sans-serif;
  position: sticky;
  background:rgb(34,195,155);
  background: linear-gradient(149deg, rgba(34,195,155,1) 0%, rgba(92,185,159,0.6895133053221288) 100%);
  display: flex;
  width: 100%;
  max-width: 100%;
  max-height:60x;
  

  > .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

  }

  > .container > .icons-socialM {
       color:white;
       display:inline-flex;
       gap:10px;
       
  }

  > .container > .copyrights{
    color: white;
   


  }


`



