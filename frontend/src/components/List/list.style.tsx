import { styled } from "@mui/material";

export const ListStyled = styled("ul")`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 5rem 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;

  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 700px;
    grid-template-columns: 1fr 1fr;
    gap: 3.5rem;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    max-width: 400px;
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }
`;

export const ItemListStyled = styled("li")`
  list-style: none;
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  padding: 0.5rem;
  border-radius: 4px;
  background-color: #dbdbdb;
`;

export const Photo = styled("img")`
  width: 100%;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.palette.text.secondary};
  background-color: ${(props) => props.theme.palette.secondary.main};
`;

export const Informations = styled("div")``;

export const Name = styled("h3")`
  margin-top: 1rem;
`;

export const Value = styled("p")`
  margin: 0;
  font-weight: bold;
  color: ${(props) => props.theme.palette.primary.main};
`;

export const Description = styled("p")`
  word-break: break-word;
`;

export const Empty = styled("h2")`
  font-size: 3rem;
  width: 100%;
  text-align: center;
`;
