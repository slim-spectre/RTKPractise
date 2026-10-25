import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { Contact } from "../components/Contact";
import { useEffect, useState } from "react";
import { fetchUsers } from "../store/reducers/ActionCreators";


export const ContactList = () => {
  const {contacts, isLoading, error} = useAppSelector((state) => state.contact);
  const dispatch = useAppDispatch();
  const [currentFilter, setCurrentFilter] = useState("All");
  const [nameFilter,setNameFilter] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  },[])

  const filteredContacts = currentFilter == 'Favorite' ? contacts.filter(contact => contact.isFavorite && contact.name.toLowerCase().includes(nameFilter.toLowerCase())) : contacts.filter(contact => contact.name.toLowerCase().includes(nameFilter.toLowerCase()));

  

  return (
    <div>
      {isLoading && "The contacts are loading...."}
      {error && "An error occured"}

      <h1>Contact List</h1>
      <select onChange={(e) => setCurrentFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Favorite">Only favorite</option>
      </select>
      <div>
        <h2>Search by Name</h2>
        <input onChange={(e) => setNameFilter(e.target.value)} type="text" placeholder="Name" />
      </div>
      <div className="flex justify-center m-2 items-center gap-1">
        {filteredContacts && filteredContacts.map(contact => <Contact key={contact.id} contact={contact}></Contact>)}
      </div>
    </div>
  )
}