import { Box } from "@mui/material";
import type { NextPage } from "next";
import TeacherList from "../src/components/List";

const Home: NextPage = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: "secondary.main" }}>
        <TeacherList></TeacherList>
      </Box>
    </div>
  );
};

export default Home;
