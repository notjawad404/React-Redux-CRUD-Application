import { useState } from "react";
import { addUser } from "../redux/userReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function AddUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uuidv4(); // Generate a unique ID using uuid
        dispatch(addUser({ id, name, email }));
        setName('');
        setEmail('');
        navigate('/');
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gray-500">
            <div>
                <h1 className="text-center font-bold py-2">Add a New User</h1>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="name" onChange={e => setName(e.target.value)} className="border-2 border-black p-1 rounded-lg w-80" />
                    <input type="text" placeholder="Email" name="email" onChange={e => setEmail(e.target.value)} className="border-2 border-black mt-2 p-1 rounded-lg w-80" />
                    <input type="submit" value="Add User" className="bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg mt-2" />
                </form>
            </div>
        </div>
    );
}
