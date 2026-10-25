import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { addContactThunk } from '../store/reducers/ActionCreators'
import type { Contact } from '../interfaces/Contact';

export const AddContact = () => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  })

  const handleChangeData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); 
    
    dispatch(addContactThunk({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      isFavorite: false,
    } as Contact));
    
    setFormData({ name: '', phone: '', email: '' });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add new Contact</h2>
        <input type="text" name="name" value={formData.name} onChange={handleChangeData} placeholder="Name" required />
        <input type="text" name="phone" value={formData.phone} onChange={handleChangeData} placeholder="Phone" required/>
        <input type="text" name="email" value={formData.email} onChange={handleChangeData} placeholder="Email" required/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}