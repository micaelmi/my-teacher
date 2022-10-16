import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import type { NextPage } from "next";
import TeacherList from "../src/components/List";
import { useIndex } from "../src/hooks/pages/useIndex";

const Home: NextPage = () => {
  const {
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
  } = useIndex();

  return (
    <div>
      <Box sx={{ backgroundColor: "secondary.main" }}>
        <TeacherList
          teachers={listTeachers}
          onSelect={(teacher) => setProfessorSelecionado(teacher)}
        ></TeacherList>
      </Box>

      <Dialog
        open={professorSelecionado !== null}
        onClose={() => setProfessorSelecionado(null)}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <h1>Marcar Aula</h1>
            <p>Insira seus dados para contatar o professor</p>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Digite o nome"
              type="text"
              fullWidth
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Digite o e-mail"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>

        <DialogActions sx={{ mt: 1 }}>
          <Button
            sx={{ borderRadius: "4px", width: "100px" }}
            onClick={() => setProfessorSelecionado(null)}
          >
            Cancelar
          </Button>
          <Button
            sx={{ borderRadius: "4px", width: "100px" }}
            onClick={() => marcarAula()}
          >
            Marcar
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        message={mensagem}
        open={mensagem.length > 0}
        autoHideDuration={2500}
        onClose={() => setMensagem("")}
      />

      <footer>
        <button className="cadastrar" onClick={() => setCadastrar(true)}>
          Cadastre-se como Professor
        </button>
      </footer>

      <Dialog
        open={cadastrar === true}
        onClose={() => setCadastrar(false)}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <h2>Insira seus dados para se cadastrar</h2>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Nome"
              type="text"
              fullWidth
              value={professorNome}
              onChange={(e) => setProfessorNome(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Valor da hora"
              type="number"
              fullWidth
              value={valorHora}
              onChange={(e) => setValorHora(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Descrição da aula"
              type="text"
              fullWidth
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Link da sua foto"
              type="text"
              fullWidth
              value={foto}
              onChange={(e) => setFoto(e.target.value)}
            />
          </Grid>
        </Grid>

        <DialogActions sx={{ mt: 1 }}>
          <Button sx={{ width: "100px" }} onClick={() => setCadastrar(false)}>
            Cancelar
          </Button>
          <Button sx={{ width: "100px" }} onClick={() => cadastrarProfessor()}>
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Home;
