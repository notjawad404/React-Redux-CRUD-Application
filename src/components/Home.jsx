import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
export default function Home() {
  const users = useSelector((state) => state.users)
  console.log(users);
  return (
    <div className="h-screen overflow-y-auto bg-blue-500">
      <div className="flex justify-center items-center flex-col">
      <h1>User List</h1>
      <Link to='./add' className="bg-green-600 text-white px-4 py-1 rounded-lg">Add</Link>
      <table className="my-2">
        <thead>
          <tr className="flex text-center">
            <th className="border-black border-2 px-4 py-1">ID</th>
            <th className="border-black border-2 px-4 py-1">Name</th>
            <th className="border-black border-2 px-4 py-1">Email</th>
            <th className="border-black border-2 px-4 py-1">Action</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
      </div>
    </div>
  )
}


// {users.map((user, index) => (
//   <tr key={index}>
//     <td className="border-black border-2 px-4 py-1">{user.id}</td>
//     <td className="border-black border-2 px-4 py-1">{user.name}</td>
//     <td className="border-black border-2 px-4 py-1">{user.email}</td>
//     <td className="border-black border-2 px-4 py-1">
//       <button className="bg-red-600 text-white px-4 py-1 rounded-lg">Delete</button>
//     </td>
//   </tr>
// ))}