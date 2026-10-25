import { useAppSelector } from "../hooks/redux"
import { selectContactsStats } from "../store/selectors"



export const Statistic = () => {
  const {total, favorites} = useAppSelector(selectContactsStats);

  return (
    <div>
      <h2>Statistic</h2>
      <p>Total amount : {total}</p>
      <p>Favorite amount : {favorites}</p>
    </div>
  )
}