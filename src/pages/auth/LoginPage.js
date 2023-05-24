/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import { dummyUsers } from '@/Utilities/global_functions'
import { useRouter } from 'next/router';
import { loginAPI } from '@/provider/redux/action/authAction';
import Layout from '@/components/Layout';
import Image from 'next/image';






















const LoginPage = () => {
  const authState = useSelector((state) => state.authRootState)
  const dispatch = useDispatch()
  const router = useRouter();







  // const handleToLogin = (id) => {
  //   try {
  //     const response = dispatch(loginAPI(id));
  //     console.log(response); // Handle the response here
  //   } catch (error) {
  //     console.error(error); // Handle any errors
  //   }
  // };




  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (authState.user) {
      router.push('/chat');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState.user]);


















  const [number, setnumber] = useState('')

  const handleToUpdateMobileNumber = (e) => {
    setnumber(e.target.value)
  }
  const handleToLogin = (e) => {
    if (e.keyCode === 13) {
      // sendOtp(number)
      if (number.length === 10) {
        return console.log('login success', number);
      }
      else if (number.length > 9) {
        return console.log('enter max 10 digit number', number);
      }
      else if (number.length < 10) {
        return console.log('enter min 10 digit number', number);
      }
    }
  }







  return (
    <>
      {!authState.user && <>





        <Head>
          <title>WhatsApp Login</title>
          <meta name="description" content="live chat kro!!, live chat kro!!, live chat kro!!" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />

          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
        </Head>


        {/* <Layout>
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
        </Layout> */}





















        <Layout>


          <div className="container mt-3">
            <div className="row pr-5 mt-3 d-flex justify-content-center">
              <div className="col-sm-7">
                <div className="card" >

                  <div className="text-center mx-auto pt-5 pb-5" >
                    <p className="h4 mb-2   d-none d-lg-block d-xl-block">Login into live chat</p>
                    <p>Enter you phone number and submit you otp to login</p>

                    <div className="card">
                      <div className="d-flex bd-highlight">
                        <div className="p-2 flex-grow-1 bd-highlight d-none d-lg-block d-xl-block">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="inputGroupPrepend">Mobile Number</span>
                            </div>
                            <input type="number" id='sign-in-button' className="form-control" placeholder="10 digits number" value={number} onChange={(e) => { handleToUpdateMobileNumber(e) }} onKeyUp={(e) => { handleToLogin(e) }} />

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </Layout>























      </>}
    </>
  )
}

export default LoginPage