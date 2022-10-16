import { Button } from "@mui/material";
import { TeacherBR } from "../../@types/teacher";
import { FormatadorService } from "../../services/FormatadorService";
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
  teachers: TeacherBR[];
  onSelect: (teacher: TeacherBR) => void;
}

const TeacherList = (props: TeacherListProps) => {
  return (
    <div>
      {props.teachers.length > 0 ? (
        <ListStyled>
          {props.teachers.map((teacher) => (
            <ItemListStyled key={teacher.id}>
              <Photo src={teacher.foto} />
              <Informations>
                <Name>{teacher.nome}</Name>
                <Value>
                  {FormatadorService.valorMonetario(teacher.valor_hora)} por
                  hora
                </Value>
                <Description>
                  {FormatadorService.limitarTexto(teacher.descricao, 100)}
                </Description>
                <Button
                  sx={{ width: "100%", fontSize: "14px" }}
                  onClick={() => props.onSelect(teacher)}
                >
                  Marcar Aula com {teacher.nome.split(" ")[0]}
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
