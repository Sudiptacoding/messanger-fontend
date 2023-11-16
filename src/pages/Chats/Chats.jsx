import React from 'react';
import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { useState } from 'react';
import { useContext } from 'react';
import { UserProvider } from '../../context/AuthContext';
import ChatInput from './ChatInput';
import moment from 'moment/moment';
import { MdDeleteForever } from "react-icons/md";
import toast from 'react-hot-toast';

const Chats = () => {
    const { user } = useContext(UserProvider)
    const { id } = useParams()
    const axiosData = useAxios()
    const [users, setUsers] = useState({})
    const [loader, setLoader] = useState(false)
    const [chat, setChat] = useState([])
    useEffect(() => {
        axiosData.get(`/chat?id=${id}`)
            .then(res => {
                setUsers(res.data)
            })
    }, [id])
    const cuser = user.email;
    const suser = users.email

    useEffect(() => {
        if (cuser && suser) {
            axiosData.get(`/allchat?cuser=${cuser}&&suser=${suser}`)
                .then(res => {
                    setChat(res.data)
                    // console.log(res.data)
                })
        }
    }, [cuser, suser, loader, id])

    const handelSubmit = (e) => {
        setLoader(false)
        e.preventDefault()
        const text = e.target.text.value;
        const { displayName, email, photoURL } = users;
        const date = moment().format("dddd")
        const time = moment().format("h:mm:ss a")
        const data = { cuserName: user.displayName, cuserEmail: user.email, cuserPhoto: user.photoURL, text, displayName, email, photoURL, date, time }
        axiosData.post(`/allChat`, data)
            .then(res => {
                console.log(res.data)
                setLoader(true)
                e.target.reset()
                document.getElementById('chat').scrollIntoView({ behavior: 'smooth' })
            })
    }

    const handelDelete = (id) => {
        setLoader(false)
        axiosData.delete(`/deleteChat/${id}`)
            .then(res => {
                setLoader(true)
                toast.success('Delete Successfully!')
            })
    }
    console.log(chat)

    return (
        <div>
            <div className='text-center'>
                <img className='w-10 mx-auto rounded-full' src={users?.photoURL} alt="" />
                <h1>{users?.displayName}</h1>
            </div>

            <div>

                <div className='h-[650px] overflow-y-scroll no-scrollbar'>
                    {
                        chat.length > 0 && <div>
                            {
                                chat?.map((item, i) => {
                                    return <div key={i}>
                                        {
                                            item?.cuserEmail === user.email ? <div id='chat' className="chat chat-end">
                                                <div className="chat-image avatar">
                                                    <div className="w-10 rounded-full">
                                                        <img src={item?.cuserPhoto} />
                                                    </div>
                                                </div>
                                                <div className="chat-header">
                                                    <time className="text-xs opacity-50">{item?.date}</time>
                                                </div>
                                                <div className="chat-bubble">{item?.text}</div>
                                                <div className="opacity-50 chat-footer">
                                                    {item?.time}  <span className='inline-block cursor-pointer font-bold' onClick={() => { handelDelete(item?._id) }}><MdDeleteForever className='mt-1' /></span>
                                                </div>

                                            </div> : <div className="chat chat-start">
                                                <div className="chat-image avatar">
                                                    <div className="w-10 rounded-full">
                                                        <img src={item?.cuserPhoto} />
                                                    </div>
                                                </div>
                                                <div className="chat-header">
                                                    <time className="text-xs opacity-50">{item?.date}</time>
                                                </div>
                                                <div className="chat-bubble">{item?.text}</div>
                                                <div className="opacity-50 chat-footer">
                                                    {item?.time}
                                                </div>
                                            </div>
                                        }
                                    </div>
                                })
                            }

                        </div>
                    }
                </div>

                <div className=''>
                    <ChatInput handelSubmit={handelSubmit}></ChatInput>
                </div>
            </div>































        </div>
    );
};

export default Chats;