import React, { useEffect } from 'react'
import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import { dummyUsers } from '@/Utilities/global_functions'
import { useRouter } from 'next/router';
import { loginAPI } from '@/provider/redux/action/authAction';





const LoginPage = () => {
  const authState = useSelector((state) => state.authRootState)
  const dispatch = useDispatch()
  const router = useRouter();





  const handleToLogin = (id) => {
    try {
      const response = dispatch(loginAPI(id));
      console.log(response); // Handle the response here
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };





  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (authState.user) {
      router.push('/chat');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState.user]);





  return (
    <>
      {!authState.user && <>





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

export default LoginPage