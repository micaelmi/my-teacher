import { Button } from "@mui/material";
import { Teacher } from "../../@types/teacher";
import {
  Description,
  Empty,
  Informations,
  ItemListStyled,
  ListStyled,
  Name,
  Photo,
  Value,
} from "./list.style";

interface TeacherListProps {
  teachers: Teacher[];
}

const TeacherList = (props: TeacherListProps) => {
  return (
    <div>
      {props.teachers.length > 0 ? (
        <ListStyled>
          {props.teachers.map((teacher) => (
            <ItemListStyled key={teacher.id}>
              <Photo src={teacher.photo} />
              <Informations>
                <Name>{teacher.name}</Name>
                <Value>
                  {teacher.value.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}{" "}
                  por hora
                </Value>
                <Description>{teacher.description}</Description>
                <Button sx={{ width: "100%" }}>
                  Marcar Aula com {teacher.name}
                </Button>
              </Informations>
            </ItemListStyled>
          ))}
        </ListStyled>
      ) : (
        <Empty>Nenhum professor encontrado</Empty>
      )}
    </div>
  );
};

export default TeacherList;
