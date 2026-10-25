import { useAppDispatch } from "../hooks/redux"
import type { ContactProps } from "../interfaces/ContactProps"
import { deleteContactThunk } from "../store/reducers/ActionCreators";
import { toggleFavorite } from "../store/reducers/ContactSlice";


export const Contact = ({contact} : ContactProps) => {
  const dispatch = useAppDispatch();

  const  handleDelete = () => {
    dispatch(deleteContactThunk(contact.id))
  }


  const handleFavorite = () => {
    dispatch(toggleFavorite(contact.id));
  }

  return (
    <div className="flex flex-col gap-1">
      <p>{contact.name}</p>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
      <p>{contact.isFavorite}</p>

      <p>{contact.isFavorite ? 'Улюблений' : 'Звичайний'}</p>

      <button onClick={handleFavorite}>Toggle favorite</button>

      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}