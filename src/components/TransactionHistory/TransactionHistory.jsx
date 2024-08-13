import css from "./TransactionHistory.module.css";
import TransactionRow from "../TransactionRow/TransactionRow";

export default function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <TransactionRow key={item.id} row={item}></TransactionRow>
        ))}
      </tbody>
    </table>
  );
}
