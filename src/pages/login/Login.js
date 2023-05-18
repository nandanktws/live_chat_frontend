import React, { useContext, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from '../../provider/redux/counterSlice'


import Head from 'next/head'
import { dummyUsers } from '@/Utilities/global_functions'
import { MyContext } from '@/provider/context/myContext';
import { useRouter } from 'next/router';
import { addNumber, lessNumber } from '@/provider/redux/action/myAction'
import { loginAPI } from '@/provider/redux/action/authAction';








































const Login = () => {
  const count = useSelector((state) => state.counterReducer.value)
  const count2 = useSelector((state) => state.authReducer)
  const dispatch = useDispatch()




  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { myState, loginAPI } = useContext(MyContext);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();


  const handleToLogin = (id) => {
    console.log(id, '65545456464564546564564564654')
    // loginAPI(id)
    dispatch(loginAPI(id))
    // dispatch(() => loginAPI(id) )
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // if (myState.user) {
    //   router.push('/');
    // }
    console.log('count2', count2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count2]);









  return (
    <>






      {/* <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(addNumber())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(lessNumber())}
          >
            Decrement
          </button>
        </div>
      </div> */}












      {/* {!myState.user && <> */}



      <Head>
        <title>WhatsApp Login</title>
        <meta name="description" content="live chat kro!!, live chat kro!!,  live chat kro!!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <div className="background-green"></div>

      <section className='login_wrrpr'>
        <div className='container'>
          <div className='login_dv'>
            <ul>
              {dummyUsers.map((item, index) => {
                return <li onClick={() => { handleToLogin(item.id) }} key={index}><p>{item.name}</p></li>
              })}
            </ul>
          </div>
        </div>
      </section>



      {/* </>} */}
    </>
  )
}

export default Login






