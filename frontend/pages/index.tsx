import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Grid,
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
    </div>
  );
};

export default Home;
