import { Box } from "@mui/material";
import type { NextPage } from "next";
import { Teacher } from "../src/@types/teacher";
import TeacherList from "../src/components/List";

const Home: NextPage = () => {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Micael",
      photo: "https://avatars.dicebear.com/api/big-smile/.svg",
      description: "Aulas de Front-end",
      value: 80,
    },
    {
      id: 2,
      name: "Lucas",
      photo: "https://avatars.dicebear.com/api/big-smile/lucasmi.svg",
      description: "Aulas de Ping-pong",
      value: 60,
    },
    {
      id: 3,
      name: "Mayara",
      photo:
        "https://avatars.dicebear.com/api/big-smile/mayaradeandraderibeiro.svg",
      description: "Aulas de Espanhol",
      value: 70,
    },
    {
      id: 4,
      name: "Elton",
      photo: "https://avatars.dicebear.com/api/big-smile/eltonfonseca.svg",
      description: "Aulas de Python",
      value: 120,
    },
  ];

  return (
    <div>
      <Box sx={{ backgroundColor: "secondary.main" }}>
        <TeacherList teachers={teachers}></TeacherList>
      </Box>
    </div>
  );
};

export default Home;
