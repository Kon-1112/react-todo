import React from 'react'
import {Tax} from "./classes/tax.ts";

type TaxType = {
  tax: number,
  amountWithTax: number,
}

const initState: TaxType = {
  tax: 0,
  amountWithTax: 0
}

function App() {

  const [rate, setRate]: [number, (rate: number) => void] = React.useState(0.1);

  const [amountWithoutTax, setAmountWithoutTax]: [number, (amount: number) => void] = React.useState(100);

  const [result, setResult]: [TaxType, (result: TaxType) => void] = React.useState(initState);

  const handleCalc = () => {
    const tax: Tax = new Tax(rate);
    setResult({
      tax: tax.getTax(amountWithoutTax),
      amountWithTax: tax.getAmountWithTax(amountWithoutTax)
    });
  }

  React.useEffect(() => {
    handleCalc();
  }, [amountWithoutTax, rate]);

  return (
    <div>
      <h1>税計算</h1>
      <table>
        <tbody>
        <tr>
          <th>税率</th>
          <th>税率(%)</th>
          <th>税別金額</th>
          <th>税額</th>
          <th>税込金額</th>
          <th></th>
        </tr>
        <tr>
          <td>
            <input
              type="number"
              value={rate}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRate(Number(event.target.value))}
            />
          </td>
          <td>
            <input
              type="number"
              value={rate * 100}
              disabled
            />
          </td>
          <td>
            <input
              type="number"
              value={amountWithoutTax}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAmountWithoutTax(Number(event.target.value))}
            />
          </td>
          <td>
            <input
              type="number"
              value={result.tax}
              disabled
            />
          </td>
          <td>
            <input
              type="number"
              value={result.amountWithTax}
              disabled
            />
          </td>
          <td>
            <button onClick={handleCalc}>
              計算
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
