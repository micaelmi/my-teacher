import { Button } from "@mui/material";
import {
  Description,
  Informations,
  ItemListStyled,
  ListStyled,
  Name,
  Photo,
  Value,
} from "./list.style";

const TeacherList = () => {
  return (
    <ListStyled>
      <ItemListStyled>
        <Photo src="https://github.com/micaelmi.png" />
        <Informations>
          <Name>Micael Miranda</Name>
          <Value>R$ 50,00 por hora</Value>
          <Description>Aulas de Front-end</Description>
          <Button sx={{ width: "70%" }}>Marcar Aula com Micael</Button>
        </Informations>
      </ItemListStyled>
      <ItemListStyled>
        <Photo src="https://github.com/micaelmi.png" />
        <Informations>
          <Name>Micael Miranda</Name>
          <Value>R$ 50,00 por hora</Value>
          <Description>Aulas de Front-end</Description>
          <Button sx={{ width: "70%" }}>Marcar Aula com Micael</Button>
        </Informations>
      </ItemListStyled>
      <ItemListStyled>
        <Photo src="https://github.com/micaelmi.png" />
        <Informations>
          <Name>Micael Miranda</Name>
          <Value>R$ 50,00 por hora</Value>
          <Description>Aulas de Front-end</Description>
          <Button sx={{ width: "70%" }}>Marcar Aula com Micael</Button>
        </Informations>
      </ItemListStyled>
      <ItemListStyled>
        <Photo src="https://github.com/micaelmi.png" />
        <Informations>
          <Name>Micael Miranda</Name>
          <Value>R$ 50,00 por hora</Value>
          <Description>Aulas de Front-end</Description>
          <Button sx={{ width: "70%" }}>Marcar Aula com Micael</Button>
        </Informations>
      </ItemListStyled>
    </ListStyled>
  );
};

export default TeacherList;
