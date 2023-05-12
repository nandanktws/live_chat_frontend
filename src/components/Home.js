import { createNewName } from '@/Utilities/const'
import { MyContext } from '@/context/myContext'
import moment from 'moment/moment'
import React, { useContext, useRef, useState } from 'react'

import { useEffect } from 'react'
import io from 'socket.io-client'

let socket


const Home = () => {
  const { myState } = useContext(MyContext);

  const [allMessage, setAllMessage] = useState([])
  const [allUsers, setAllUsers] = useState([])

  const [myMessage, setMyMessage] = useState('')
  const [userData, setUserData] = useState([])




  let newPickupName = createNewName();
  let newPickupImage = Math.floor(Math.random() * 11) + 10;






  const socketAssign = useRef(false);
  useEffect(() => {
    socket = new io('http://localhost:3000', { reconnectionDelayMax: 10000, });
    socketInitializer()

    if (!socketAssign.current) {
      socket.on('userInfo', (e) => {
        setUserData({ socketId: e, })
        socket.emit('userInfo', { socketId: e, userId: myState.userID });
      });
      socketAssign.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])





  const socketInitializer = async () => {


    socket.on('userInfo', (e) => {
      console.log('userInfo e', e);
      setUserData({
        socketId: userData.socketId,
        userId: e.id,
        name: e.name,
        image: e.image,
        online_status: e.online_status,
      })
    });

    // socket.on('userChatList', (myChatsList) => {
    //   console.log('userChatList', myChatsList);
    //   setAllUsers(myChatsList)
    // });



    socket.on('userChatsMessages', (e) => {
      setAllMessage(e)
      console.log(e);
    });

    socket.on('allMessage', (e) => {
      setAllMessage(e)
    });





    { console.log('userInfo state', userData) }
  }





  const handleMyMessage = (e) => {
    const curruntTime = new Date();
    if (e.keyCode === 13 && myMessage !== '' && myMessage !== ' ') {
      socket.emit('myMessage', { id: userData.id, msg: myMessage, time: curruntTime, name: newPickupName });
      setMyMessage('')
    }
  }



  return (
    <>




      <div className="background-green"></div>


      <div className="main-container">
        <div className="left-container">

          <div className="header">
            <div className="user-img">
              <img className="dp" src={`/users/${userData.image}`} alt={userData.name} />
            </div>
            <p className='user-name'>{userData.name}</p>
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


            {/* <div className="chat-box active">
              <div className="img-box">
                <img className="img-cover" src="https://www.codewithfaraz.com/InstaPic.png" alt="" />
              </div>
              <div className="chat-details">
                <div className="text-head">
                  <h4>PYrates Team</h4>
                  <p className="time">07:49</p>
                </div>
                <div className="text-message">
                  <p>Awesome! I will start a vid..</p>
                </div>
              </div>
            </div> */}



            {allMessage && allMessage.map((item, index) => {
              return <>


                {item.info.type === 'group' ? <>
                  <div key={index} className={`chat-box ${index === 0 ? 'active' : ''}`}>
                    <div className="img-box">
                      <img className="img-cover" src={`/users/${item.info.image}`} alt={item.info.name} />
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
                </> : (
                  '12'
                )}










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
                <img className="dp" src={`/users/1.jpg`} />
              </div>
              <h4>PYrates Team<br /><span>Online</span></h4>
            </div>
            <div className="nav-icons">
              <li><i className="fa-solid fa-magnifying-glass"></i></li>
              <li><i className="fa-solid fa-ellipsis-vertical"></i></li>
            </div>
          </div>

          <div className="chat-container">

            {/* {console.log('allMessage', allMessage)} */}

            {/* {allMessage.length ? allMessage.map((item, index) => {
              return <>
                <div key={index} className={`message-box ${item.id === userData.userId ? 'my-message' : 'friend-message'} `}>
                  <p>
                    {item.name && <><i>{item.name}</i><br /></>}
                    {item.message && <b>{item.message}</b>}
                    {item.time && <span>{moment(item.time).format('hh:mm a')}</span>}
                  </p>
                </div>
              </>
            }) : null} */}

          </div>

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
        </div>

      </div>





    </>
  )
}

export default Home