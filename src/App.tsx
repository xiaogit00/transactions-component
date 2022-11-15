import React, { useState } from 'react'
import Transactions from './transactions';
import { Input } from 'antd'
const { Search } = Input

function App() {
  const title = "<Transactions>"
  const [walletAddress, setWalletAddress] = useState<string | null>(null)

  const onSearch = (value: string) => {
    setWalletAddress(value)
    console.log("Wallet address Values: ", value)
}

if (walletAddress) {
  return (
      <>
      <div style={{width: "80%", margin: "auto"}}>
        <h1> {title}  </h1>
        {/*<FormControls onSubmit={onSubmit}/>*/}
        <Search placeholder="Input Wallet Address" onSearch={onSearch} enterButton style={{ width: 500, margin:"auto" }}/>
        <Transactions chainId={1} address={walletAddress}/>
      </div>
      </>
  )
} else {
  return (
      <>
      <div style={{width: "80%", margin: "auto"}}>
        <h1> {title}  </h1>
        {/*<FormControls onSubmit={onSubmit}/>*/}
        <Search placeholder="Input Wallet Address" onSearch={onSearch} enterButton style={{ width: 500, margin:"auto" }}/>
      </div>
      </>
  )
}
}


export default App;
