import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal() {
  const expenseList = useSelector(store=>store.EXPENSE.expenseList)
  const income = useSelector(store=> store.EXPENSE.income)
  const totalExpenses = expenseList.reduce((acc , currentItem )=>{
    return acc + Number (currentItem.price)
    },0)

const remainingMoneay = income - totalExpenses
  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{totalExpenses} $</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{remainingMoneay} $</div>
      </div>
    </div>
  );
}
