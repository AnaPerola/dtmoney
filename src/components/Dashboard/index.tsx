import { TransactionTable } from "../TransactionTable";
import { Container } from "./style";
import { Summary } from "./Summary";

export function Dashboard(){
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  )
}