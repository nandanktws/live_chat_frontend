import React, { useContext, useEffect } from 'react'

import Head from 'next/head'
import { dummyUsers } from '@/Utilities/const'
import { MyContext } from '@/context/myContext';
import { useRouter } from 'next/router';

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { myState, loginAPI } = useContext(MyContext);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();


  const handleToLogin = (id) => {
    console.log(id)
    loginAPI(id)
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (myState.user) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myState.user]);


  return (
    <>
    {!myState.user && <>



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



      </>}
    </>
  )
}

export default index






