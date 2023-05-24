import { logoutAction } from '@/provider/redux/action/authAction'
import { ChatAction, allMessageUpdateAction, chatAction, newMessageToLocalUpdateAction, userDataUpdateAction } from '@/provider/redux/action/chatAction'
import moment from 'moment/moment'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import io from 'socket.io-client'

let socket


const Home = () => {
  const authState = useSelector((state) => state.authRootState)
  const chatState = useSelector((state) => state.chatRootState)
  const dispatch = useDispatch()


  let allMessage = chatState.allMessage
  let userData = chatState.userData
  let newMessageToLocal = chatState.userDatanewMessageToLocal

  const [myMessage, setMyMessage] = useState('')
  const [activeTabMenu, setActiveTabMenu] = useState(null)



  






  const socketAssign = useRef(false);
  useEffect(() => {
    socket = new io('http://localhost:3000', { reconnectionDelayMax: 10000, });
    socketInitializer()

    if (!socketAssign.current) {
      socket.on('userInfo', (e) => {
        dispatch(userDataUpdateAction({ socketId: e }));
        socket.emit('userInfo', { socketId: e, userId: authState.userID });
      });
      socketAssign.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])





  const socketInitializer = async () => {


    socket.on('userInfo', (e) => {
      dispatch(userDataUpdateAction({
        socketId: userDataUpdateAction.socketId,
        userId: e.id,
        name: e.name,
        image: e.image,
        online_status: e.online_status,
      }));
    });



    socket.on('userChatsMessages', (e) => {
      dispatch(allMessageUpdateAction(e))
      console.log('userChatsMessages', e);
    });


  





    socket.on('newMessage', (e) => {
      console.log('newMessage recived', e);
      dispatch(newMessageToLocalUpdateAction(e))
    });

  }

 




  useEffect(() => {
    newMessageToLocal && (
      allMessage.some((item) => item.messages !== newMessageToLocal.time)
    ) && (
        allMessage.map((item) => {
          return item.info.room_id === newMessageToLocal.roomId ? (
            item.messages.unshift(newMessageToLocal)
          ) : item
        })
      )
    dispatch(newMessageToLocalUpdateAction(null))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newMessageToLocal])









  const handleMyMessage = (e) => {
    const curruntTime = new Date();
    if (e.keyCode === 13 && myMessage !== '' && myMessage !== ' ') {
      socket.emit('myMessage', { id: authState.userID, message: myMessage, time: curruntTime, roomId: activeTabMenu });
      setMyMessage('')
    }
  }



  return (
    <>






      <div className="main-container">
        <div className="left-container">

          <div className="header">
            <div className="user-img">
              <Image
                className="dp"
                src={`/users/${userData?.image}`}
                width={40}
                height={40}
                alt={userData?.name}
              />
            </div>
            <p className='user-name'>{userData?.name}</p>
            {/* <div className="nav-icons">
              <li><i className="fa-solid fa-users"></i></li>
              <li><i className="fa-solid fa-message">
              </i></li>
              <li><i className="fa-solid fa-ellipsis-vertical"></i></li>
            </div> */}
          </div>


          {/* <div className="notif-box">
            <i className="fa-solid fa-bell-slash"></i>
            <div className="notif-text">
              <p>Get Notified of New Messages</p>
              <a href="#">Turn on Desktop Notifications ›</a>
            </div>
            <i className="fa-solid fa-xmark"></i>
          </div> */}

          <div className="search-container">
            <div className="input">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Search or start new chat" />
            </div>
            <i className="fa-sharp fa-solid fa-bars-filter"></i>
          </div>


          <div className="chat-list">





            {allMessage && allMessage.map((item, index) => {
              return <>
                {item.info.type === 'group' ? <>
                  <div key={index} className={`chat-box ${item.info.room_id === activeTabMenu ? 'active' : ''}`} onClick={() => { setActiveTabMenu(item.info.room_id) }}>
                    <div className="img-box">
                      <Image
                        className="img-cover"
                        src={`/users/${item.info.image}`}
                        width={45}
                        height={45}
                        alt={item.info.name}
                      />
                    </div>
                    <div className="chat-details">

                      <div className="text-head">
                        <h4>{item.info.name}</h4>
                        <p className="time unread">{moment(item.messages[0].time).format('hh:mm a')}</p>
                      </div>
                      <div className="text-message">
                        {item.messages.length ? <p>“{(item.messages[0].message).slice(0, 50)}”</p> : ''}
                        {item.messages.length ? <b>{item.messages.length}</b> : ''}
                      </div>

                    </div>
                  </div>
                </> : <>
                  <div key={index} className={`chat-box ${item.info.room_id === activeTabMenu ? 'active' : ''}`} onClick={() => { setActiveTabMenu(item.info.room_id) }}>
                    <div className="img-box">
                      <Image
                        className="img-cover"
                        src={`/users/${item.otherUser.image}`}
                        width={45}
                        height={45}
                        alt={item.otherUser.name}
                      />
                    </div>
                    <div className="chat-details">

                      <div className="text-head">
                        <h4>{item.otherUser.name}</h4>
                        <p className="time unread">{moment(item.messages[0].time).format('hh:mm a')}</p>
                      </div>
                      <div className="text-message">
                        {item.messages.length ? <p>“{(item.messages[0].message).slice(0, 50)}”</p> : ''}
                        {item.messages.length ? <b>{item.messages.length}</b> : ''}
                      </div>

                    </div>
                  </div>
                </>}










                {/* <div key={index} className={`chat-box ${index === 0 ? 'active' : ''}`}>
                  <div className="img-box">
                    <img className="img-cover" src={`/users/${item.image}`} alt={item.name} />
                  </div>
                  <div className="chat-details"> */}



                {/* <div className="text-head">
                      <h4>{item.name}</h4>
                      {index === 0 ? <>
                        {allMessage.length ? <p className="time unread">{moment(allMessage[0].time).format('hh:mm a')}</p> : ''}
                      </> : (
                        allMessage.some((msgItem) => {
                          return msgItem.id === item.id
                        }) && <>
                          <p className="time unread">
                            {moment(
                              allMessage.filter((msgItem) => {
                                return item.id === msgItem.id
                              })[0].time
                            ).format('hh:mm a')}
                          </p>
                        </>
                      )}
                    </div> */}
                {/* <div className="text-message">
                      {index === 0 ? <>
                        {allMessage.length ? <p>“{(allMessage[0].msg).slice(0, 50)}”</p> : ''}
                        {allMessage.length ? <b>{allMessage.length}</b> : ''}
                      </> : (
                        allMessage.some((msgItem) => {
                          return msgItem.id === item.id
                        }) && <>
                          <p>“{(allMessage.filter((msgItem) => {
                            return item.id === msgItem.id
                          }).pop().msg).slice(0, 50)}”</p>
                          <b>{allMessage.filter((msgItem) => {
                            return item.id === msgItem.id
                          }).length}</b>
                        </>
                      )}
                    </div> */}





                {/* </div> */}
                {/* </div> */}
              </>
            })}




          </div>

        </div>





        <div className="right-container">
          <div className="header">
            <div className="img-text">
              <div className="user-img">
                <Image
                  className="dp"
                  src={`/users/1.jpg`}
                  width={40}
                  height={40}
                  alt="name"
                />
              </div>
              <h4>PYrates Team<br /><span>Online</span></h4>
            </div>
            <div className="nav-icons">
              <li><i className="fa-solid fa-magnifying-glass"></i></li>
              {/* <li><i className="fa-solid fa-ellipsis-vertical"></i></li> */}
              <li><i className="fa-solid fa-arrow-right-from-bracket" onClick={() => { dispatch(logoutAction()) }}></i></li>
            </div>
          </div>

          <div className="chat-container">
            {/* 
            {console.log('allMessage', allMessage)} */}

            {activeTabMenu && allMessage.find((item) => item.info.room_id === activeTabMenu).messages.map((item, index) => {
              return <>
                <div key={index} className={`message-box ${item.id === userData?.userId ? 'my-message' : 'friend-message'} `}>
                  <p>
                    {item.id && <><i>#{item.id}</i><br /></>}

                    {/* {item.name && <><i>{item.name}</i><br /></>} */}
                    {item.message && <b>{item.message}</b>}
                    {item.time && <span>{moment(item.time).format('hh:mm a')}</span>}
                  </p>
                </div>
              </>
            })}



          </div>


          {activeTabMenu && <>
            <div className="chatbox-input">
              <i className="fa-regular fa-face-grin"></i>
              <i className="fa-sharp fa-solid fa-paperclip"></i>
              <input
                type="text"
                value={myMessage}
                placeholder="Type a message"
                onChange={(e) => { setMyMessage(e.target.value) }}
                onKeyUp={(e) => { handleMyMessage(e) }}
              />
              <i className="fa-solid fa-microphone"></i>
            </div>
          </>}
        </div>

      </div>





    </>
  )
}

export default Home