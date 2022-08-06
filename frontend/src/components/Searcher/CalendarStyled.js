import styled from "styled-components";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export const CalendarStyled = styled.div`
  .inputBox{
     background-color:#FFFFFF;
     color:#607D8B;
     border:none;
     font-size: 14px;
     font-weight: 500;
     border-radius: 5px;
     border-color: none;
     width: 340px;
     height: 36px;
     box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
     text-align: center;
     position: relative;
  }
  .inputBox:active{
    border-color: red !important;
  }
  .rdrDateDisplay{
    color: rgb(34,195,155) !important;
  }
  .rdrDayStartPreview{
    color: rgb(34,195,155) !important;
  }
  .rdrStartEdge{
    color: rgb(34,195,155) !important;
  }
  .rdrEndEdge{
    color: rgb(34,195,155) !important;
  }
  .rdrInRange{
    color: rgb(34,195,155) !important;
  }
  .rdrDayEndPreview{
    color: rgb(34,195,155) !important;
  }
  .rdrDayNumber{
    color: rgb(34,195,155) !important;
  }
  .rdrDayStartWeek{
    color: rgb(34,195,155) !important;
  }
  .rdrDayEndWeek{
    color: rgb(34,195,155) !important;
  }
  .rdrDayWeekend{
    color: rgb(34,195,155) !important;
  }
  .rdrDay{
    color: rgb(34,195,155) !important;
  }
  .rdrDay
  .rdrDayToday{
    color: rgb(34,195,155) !important;
  }
  .rdrDayNumber{
    color: rgb(34,195,155) !important;
  }
  .rdrDayHovered{
    color: rgb(34,195,155) !important;
  }
  .rdrDayActive{
    color: rgb(34,195,155) !important;
  }
  span .rdrDayNumber{
    color: rgb(34,195,155) !important;
  }
.rdrDateDisplayWrapper{
  width: 340px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.rdrMonthAndYearWrapper{
  width: 340px;
  border:none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.rdrMonthPicker{
  color: rgb(34,195,155) !important;
}

.rdrMonthAndYearWrapper{
  width: 340px;
  border-bottom:none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.rdrMonth{
  width: 320px;
  border:none;
  border-radius: 0 0 20px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

@media(min-width:376px ){
  .inputBox{
      background-color:#FFFFFF;
     color:#607D8B;
     border:none;
     font-size: 14px;
     font-weight: 500;
     border-radius: 5px;
     border-color: none;
     width: 345px;
     margin-rigth: 20px;
     height: 36px;
     box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
     text-align: center;
     position: relative;
  }
  .rdrDateDisplayWrapper{
  width: 340px;
  border:none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.rdrMonthAndYearWrapper{
  width: 340px;
  border:none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.rdrMonthPicker{
  color: rgb(34,195,155) !important;
}

.rdrMonthAndYearWrapper{
  width: 342px;
  border:none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.rdrMonth{
  width: 320px;
  height: 223px;
  border: none;
  border-radius: 0 0 20px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
}
@media(min-width:640px ){
  .inputBox{
      background-color:#FFFFFF;
     color:#607D8B;
     border:none;
     font-size: 14px;
     font-weight: 500;
     border-radius: 5px;
     border-color: none;
     width: 250px;
     margin-rigth: 20px;
     height: 36px;
     box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
     text-align: center;
     position: 375;
  }
  .rdrDateDisplayWrapper{
  width: 260px;
  border:none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.rdrMonthAndYearWrapper{
  width: 260px;
  border:none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.rdrMonthPicker{
  color: rgb(34,195,155) !important;
}

.rdrMonthAndYearWrapper{
  width: 260px;
  border:none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.rdrMonth{
  width: 240px;
  height: 223px;
  border: none;
  border-radius: 0 0 20px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
}

`