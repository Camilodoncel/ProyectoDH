import styled from "styled-components";
import logo1 from "../assets/logo 1.png"


export const HeaderStyled= styled.header`
background-color: white;
text-align: center;
padding: 2rem;
height: 15vh;
position: sticky;
box-shadow: 1px 1px 5px #d4d4d4;



img{
    display: block;
    -moz-box-sizing: border-box;
     box-sizing: border-box;
    background-image: url(${logo1});
    width: 71px;
    height: 51px;
    padding-left: 71px;


}

button{
    display:none;
}

@media screen and (min-width: 641px)  {

    display: flex;
    justify-content: space-between;
    


   


    .containerButton{
        display:flex;
        justify-content: space-around;
        gap: 20px;
        
    }

    button{
       position: relative;
       top: 40%;
       background: none;
       border: 1.4px solid rgb(34,195,155);
       border-radius: 5px;
       width: 10.4rem;
       height: 2.4rem;
       font-weight: 700;
       font-size: 16px;
       color: rgb(34,195,155)
    }

  

    button{
        display: block;
    }

    button:hover{
        background: rgb(34,195,155);
        background: linear-gradient(149deg, rgba(34,195,155,1) 0%, rgba(92,185,159,1) 100%);
        color: white;

    }
}
@media screen and (min-width: 1024px) {

    .containerButton{
        display:flex;
        justify-content: space-around;
        gap: 80px;
    }

    
    img{
    
    height: 58px;
    width: 100%;
    padding-left: 0;
    background-image: none;}

    
}
`





