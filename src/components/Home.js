import { createNewName } from '@/Utilities/const'
import moment from 'moment/moment'
import React, { useRef, useState } from 'react'

import { useEffect } from 'react'
import io from 'socket.io-client'

let socket


const Home = () => {

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
        setUserData({ id: e, name: newPickupName, image: newPickupImage })
        socket.emit('allUsers', { id: e, name: newPickupName, image: newPickupImage, type: 'user' });
      });
      socketAssign.current = true;
    }
  }, [])





  const socketInitializer = async () => {

    socket.on('allUsers', (e) => {
      setAllUsers(e)
    });

    socket.on('allMessage', (e) => {
      setAllMessage(e)
    });

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
              <img className="dp" src={`/users/${userData.image}.jpg`} alt={userData.name} />
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


            {allUsers && allUsers.map((item, index) => {
              return <>
                <div key={index} className={`chat-box ${index === 0 ? 'active' : ''}`}>
                  <div className="img-box">
                    <img className="img-cover" src={`/users/${item.image}.jpg`} alt={item.name} />
                  </div>
                  <div className="chat-details">
                    <div className="text-head">
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
                    </div>
                    <div className="text-message">
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
                    </div>
                  </div>
                </div>
              </>
            })}




          </div>

        </div>





        <div className="right-container">
          <div className="header">
            <div className="img-text">
              <div className="user-img">
                <img className="dp" src="https://www.codewithfaraz.com/InstaPic.png" alt="" />
              </div>
              <h4>PYrates Team<br /><span>Online</span></h4>
            </div>
            <div className="nav-icons">
              <li><i className="fa-solid fa-magnifying-glass"></i></li>
              <li><i className="fa-solid fa-ellipsis-vertical"></i></li>
            </div>
          </div>

          <div className="chat-container">

            {allMessage && allMessage.map((item, index) => {
              return <>
                <div key={index} className={`message-box ${item.id === userData.id ? 'my-message' : 'friend-message'} `}>
                  <p>
                    {item.name && <><i>{item.name}</i><br /></>}
                    {item.msg && <b>{item.msg}</b>}
                    {item.time && <span>{moment(item.time).format('hh:mm a')}</span>}
                  </p>
                </div>
              </>
            })}

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