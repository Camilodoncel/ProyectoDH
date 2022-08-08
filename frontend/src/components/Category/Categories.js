import React from "react";
import CardCategory from "./CardCategory";
import listCategory from "./listCategory.json";
import { CointanerStyled } from "./CardCategoryStyled";

const Category = ({list}) => {
  return (
    <>
      <div>
        <h2>Buscar por categoría</h2>
        <CointanerStyled >

        {listCategory.map((element, index) => {
          return (
            <>
              <CardCategory
                key={index}
                img={element.img}
                category={element.category}
                info={element.info}
              />
            </>
          );
        })}

        
        </CointanerStyled >
      </div>
    </>
  );
};

export default Category;
