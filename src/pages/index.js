import React, { useContext, useEffect } from 'react';
import Home from '@/components/Home'
import { MyContext } from '@/context/myContext';
import Head from 'next/head'
import { useRouter } from 'next/router';



export default function index() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { myState } = useContext(MyContext);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();




  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!myState.user) {
      router.push('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myState.user]);



  return (
    <>
      {myState.user && <>



        <Head>
          <title>WhatsApp</title>
          <meta name="description" content="live chat kro!!, live chat kro!!,  live chat kro!!" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        </Head>



        <Home />



      </>}
    </>
  )
}
