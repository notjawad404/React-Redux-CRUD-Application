import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
  const users = useSelector((state) => state.user);
  console.log(users);
  return (
    <div className="h-screen overflow-y-auto bg-blue-500 p-4">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold text-white mb-4">User List</h1>
        <Link
          to="./add"
          className="bg-green-600 text-white px-4 py-2 rounded-lg mb-4 hover:bg-green-700 transition"
        >
          Add User
        </Link>
        <table className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden table-fixed">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="w-1/12 px-4 py-2 text-left">Sr#</th>
              <th className="w-4/12 px-4 py-2 text-left">Name</th>
              <th className="w-4/12 px-4 py-2 text-left">Email</th>
              <th className="w-3/12 px-4 py-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="bg-gray-100 border-b border-gray-600"
              >
                <td className="w-3/12 px-4 py-2 border-b border-gray-300">{index}</td>
                <td className="w-3/12 px-4 py-2 border-b border-gray-300">{user.name}</td>
                <td className="w-3/12 px-4 py-2 border-b border-gray-300">{user.email}</td>
                <td className="w-3/12 px-4 py-2 border-b border-gray-300 text-center">
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
