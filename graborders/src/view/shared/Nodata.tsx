import React from 'react'
import { i18n } from '../../i18n'

function Nodata() {
  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'center' ,padding:20 , fontSize:15, flexDirection:'column'}}>
      
      
      <img src='/icons/nofound.svg' />
      
      
    <span style={{color:'#8C8C8C', fontWeight:500}}> {i18n("transaction.notransaction")} </span> </div>
  ) 
}

export default Nodata