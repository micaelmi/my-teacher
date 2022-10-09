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
`;

export const Photo = styled("img")`
  width: 100%;
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
