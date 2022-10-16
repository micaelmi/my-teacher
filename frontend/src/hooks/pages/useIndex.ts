import { useEffect, useState } from "react";
import { TeacherBR } from "../../@types/teacher";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
  const [listTeachers, setListTeachers] = useState<TeacherBR[]>([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const [professorSelecionado, setProfessorSelecionado] =
    useState<TeacherBR | null>(null);

  useEffect(() => {
    ApiService.get("/professores").then((response) => {
      setListTeachers(response.data);
    });
  }, []);

  function marcarAula() {
    if (professorSelecionado != null) {
      if (validarDadosAula()) {
        ApiService.post(`/professores/${professorSelecionado.id}/aulas`, {
          nome,
          email,
        })
          .then(() => {
            setProfessorSelecionado(null);
            alert("Aula marcada com sucesso!");
          })
          .catch((error) => {
            alert(error.response?.data.message);
          });
      } else {
        alert("Preencha os dados corretamente");
      }
    }
  }

  function validarDadosAula() {
    return nome.length >= 3 && email.length >= 6;
  }

  return {
    listTeachers,
    nome,
    setNome,
    email,
    setEmail,
    professorSelecionado,
    setProfessorSelecionado,
    marcarAula,
  };
}
