import LoginPage from './auth/LoginPage'

const index = () => {
  return (
    <>
      {/* <div suppressHydrationWarning={true}> */}
        {/* {process.browser && <LoginPage />} */}
        <LoginPage />
      {/* </div> */}
    </>
  )
}

export default index