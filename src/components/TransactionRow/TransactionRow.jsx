import css from "./TransactionRow.module.css";

export default function TransactionRow({
  row: { id, type, amount, currency },
}) {
  return (
    <tr key={id}>
      <td className={css.typeColumn}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
