import { useEffect, useState } from "react";
import { TeacherBR } from "../../@types/teacher";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
  const [listTeachers, setListTeachers] = useState<TeacherBR[]>([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [professorSelecionado, setProfessorSelecionado] =
    useState<TeacherBR | null>(null);

  const [cadastrar, setCadastrar] = useState(false);
  const [professorNome, setProfessorNome] = useState("");
  const [valorHora, setValorHora] = useState("");
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState("");

  useEffect(() => {
    ApiService.get("/professores").then((response) => {
      setListTeachers(response.data);
    });
  }, []);

  useEffect(() => {
    setNome("");
    setEmail("");
  }, [professorSelecionado]);

  function marcarAula() {
    if (professorSelecionado != null) {
      if (validarDadosAula()) {
        ApiService.post(`/professores/${professorSelecionado.id}/aulas`, {
          nome,
          email,
        })
          .then(() => {
            setProfessorSelecionado(null);
            setMensagem("Aula marcada com sucesso!");
          })
          .catch((error) => {
            setMensagem(error.response?.data.message);
          });
      } else {
        setMensagem("Preencha os dados corretamente");
      }
    }
  }

  function validarDadosAula() {
    return nome.length >= 3 && email.length >= 6;
  }

  function cadastrarProfessor() {
    if (cadastrar === true) {
      if (validarDadosProfessor()) {
        // ApiService.post(`/professores/${professorSelecionado.id}/aulas`, {
        //   nome,
        //   email,
        // })
        //   .then(() => {
        //     setProfessorSelecionado(null);
        //     setMensagem("Aula marcada com sucesso!");
        //   })
        //   .catch((error) => {
        //     setMensagem(error.response?.data.message);
        //   });
        setCadastrar(false);
        setMensagem("Cadastro realizado com sucesso!");
      } else {
        setMensagem("Preencha os dados corretamente");
      }
    }
  }

  function validarDadosProfessor() {
    return (
      professorNome.length >= 3 &&
      valorHora.length > 0 &&
      descricao.length > 10 &&
      foto.length > 12
    );
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
    mensagem,
    setMensagem,
    cadastrar,
    setCadastrar,
    professorNome,
    setProfessorNome,
    valorHora,
    setValorHora,
    descricao,
    setDescricao,
    foto,
    setFoto,
    cadastrarProfessor,
  };
}
