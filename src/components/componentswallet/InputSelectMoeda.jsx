import React, { useState, useEffect } from 'react';
import requestApi from '../../services/api';
import { getNewId } from '../../services/idServices';

function InputSelectMoeda({
  inputMoeda = 'USD',
  onChangeMoeda = null,
}) {
  const [moedas, setMoedas] = useState([]);

  useEffect(() => {
    async function getMoedas() {
      const apiMoedas = await requestApi();
      setMoedas(Object.values(apiMoedas));
    }
    getMoedas();
  }, []);

  return (
    <div>
      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          id="currency"
          onChange={ onChangeMoeda }
          value={ inputMoeda }
        >
          {moedas.map((item) => <option key={ getNewId() }>{item.code}</option>)}
        </select>
      </label>
    </div>
  );
}

export default InputSelectMoeda;
