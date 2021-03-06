import React from 'react';

function HeaderTable() {
  return (
    <tr>
      <th value="Descrição">Descrição</th>
      <th value="Tag">Tag</th>
      <th value="Método de pagamento">Método de pagamento</th>
      <th value="Valor">Valor</th>
      <th value="Moeda">Moeda</th>
      <th value="Câmbio utilizado">Câmbio utilizado</th>
      <th value="Valor convertido">Valor convertido</th>
      <th value="Moeda de conversão">Moeda de conversão</th>
      <th value="Editar/Excluir">Editar/Excluir</th>
    </tr>
  );
}

export default HeaderTable;
