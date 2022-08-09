import styled from "styled-components";

export const CardStyled = styled.div`

  max-width: 370px;
  
 
  .accordion {
    width: auto;
    
    
    
  }
  .accordionExample {
   
  }

  .accordion-item {
    
    -webkit-box-shadow: 0px 0px 8px -2px rgba(192, 192, 194, 1);
    -moz-box-shadow: 0px 0px 8px -2px rgba(192, 192, 194, 1);
    box-shadow: 0px 0px 8px -2px rgba(192, 192, 194, 1);
    border-radius: 1rem;
    padding: 0.7%;
    
  
  }

  img {
    width: 355px;
    height: 220px;
    padding-right: 2%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    cursor: pointer;
  }

p{
  cursor:default;
}

  h2{
   
    width: 360px;
    cursor: pointer;

  }

  @media screen and (min-width: 641px)  {}

  @media screen and (min-width: 1365px) {

    max-width: 340px;



    img {
    max-width: 326px;
    height: 220px;
    padding-right: 2%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    cursor: pointer;
  }
  
  
 
  .accordion {
    width: auto;
    
    
    
  }
  .accordionExample {
   
  }

  .accordion-item {
    
    -webkit-box-shadow: 0px 0px 8px -2px rgba(192, 192, 194, 1);
    -moz-box-shadow: 0px 0px 8px -2px rgba(192, 192, 194, 1);
    box-shadow: 0px 0px 8px -2px rgba(192, 192, 194, 1);
    border-radius: 1rem;
    padding: 0.7%;
    
  
  }

  img {
    width: 402px;
    height: 220px;
    padding-right: 2%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }


  h2{
   
    max-width: 325px;

  }
  }

 

  
`;

export const Cointaner = styled.div`
display: grid;
justify-content: center;

`
export const Categories = styled.section`
margin-bottom:20px;
display: grid;
grid-template-columns: auto;
gap:10px;
@media screen and (min-width: 768px)  {
    display: grid;
    grid-template-columns: auto auto;
    gap:10px
}

@media screen and (min-width: 1365px) {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap:10px
}
`