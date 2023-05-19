import React, { useEffect } from 'react';
import Home from '@/pages/chat/components/Home'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';





const ChatHome = () => {
  const authState = useSelector((state) => state.authRootState)
  const router = useRouter();





  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!authState.user) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState.user]);





  return (
    <>
      {authState.user && <>



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

export default ChatHome