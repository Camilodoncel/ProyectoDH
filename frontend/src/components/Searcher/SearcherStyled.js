import styled from 'styled-components';

export const SearcherStyled = styled.div`
  section{
    display: flex;
    width: 100%;
    height: 151px;
    margin: 0px 0px;
    background: rgb(2,0,36);
    background: linear-gradient(21deg, rgba(2,0,36,1) 0%, rgba(90,97,189,1) 58%, rgba(0,11,85,1) 98%);
    flex-direction: column;
    align-items: center;
    position: relative;
    flex-wrap: wrap;
  }
  h1{
    color:White;
    font-size: 36px;
    weight: 700;
    line-height: 42.19px;
    font-family: roboto;
  }
  form{
    display: flex;
    flex-direction: row;
    gap: 30px;
    position: absolute;
    margin-top:90px;
  }
  .location{
     width: 422px;
     height: 40px;
     color: Black;
     box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
     border-radius: 5px;
  }
  .icon{
     color: #607D8B;
     margin-right: 5px;
  }

  .selectLabel{
     color: #607D8B;
     font-weight: normal;
     font-size: 16px;
     font-eight: 500;
     margin-left: 0px;
  }

  .selectLocation{
     display: flex;
     flexDirection: row;
     gap: 10px;
     align-items: center;
     box-sizing: border-box;
     border: 1px solid #F3F1ED;
     box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
     border-radius: 0px 0px 5px 5px

  }
  .cities{
     display: flex;
     flex-direction: column;
     font-size: 13px;
     font-weight: bold;
  }
  .country{
     font-weight: lighter;
     fontSize: 11px;
  }

  .search{
     background:rgb(34,195,155);
     background: linear-gradient(149deg, rgba(34,195,155,1) 0%, rgba(92,185,159,0.6895133053221288) 100%);
     color: white;
     border: none;
     border-radius: 5px;
     width: 206px;
     height: 40px;
     box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  }
`