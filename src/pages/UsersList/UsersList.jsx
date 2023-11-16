
import React, { useContext } from 'react';
import useAllData from '../../hooks/useAllData';
import { Link } from 'react-router-dom';
import { UserProvider } from '../../context/AuthContext';


const UsersList = () => {
    const { isPending, error, data, refetch } = useAllData()
    const { user } = useContext(UserProvider)
    console.log(data)

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            {
                data && <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <tbody>

                                {
                                    data?.map((item, i) => {
                                        return <div>

                                            <tr>
                                                <td>
                                                    <div className="flex items-center space-x-3">
                                                        <div className="avatar">
                                                            <div className="w-12 h-12 mask mask-squircle">
                                                                <img src={item?.photoURL} alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{item?.displayName}</div>
                                                            <div className="text-sm opacity-50">{item?.email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                {
                                                    user?.email == item?.email && <th>its you</th>
                                                }
                                                <th>
                                                    <Link to={`/chats/${item._id}`} >  <button className="btn btn-primary btn-xs">Chart</button></Link>
                                                </th>
                                            </tr>
                                        </div>
                                    })
                                }


                            </tbody>

                        </table>
                    </div>
                </div>
            }

        </div >
    );
}


export default UsersList;