import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';

import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import TotalImg from '../../assets/total.svg';

import { Container } from './styles';

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  console.log(transactions);
  

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="Entradas" />
        </header>

        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt="Saídas" />
        </header>

        <strong>- R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={TotalImg} alt="" />
        </header>

        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}
