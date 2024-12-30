import { useSelector } from "react-redux";
import { ListItem } from "../ListItem/ListItem";

export function List() {


const expenseList = useSelector((store)=>store.EXPENSE.expenseList )

  return (
    <div style={{ overflowY: "scroll", height: "40%" }}>
      <table className="table table-hover table-borderless">
        <tbody>
          {
            expenseList.map(
              (item,i)=>{
                return <ListItem key={item.name+i} item={item}/>
              })
          }
        </tbody>
      </table>
    </div>
  );
}
