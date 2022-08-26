import React, { useEffect, useState } from 'react'
export const SetTripContext = React.createContext();
function TripAuth( {children}) {
    const [status, setStatus] = useState(false);
  const handelClick = () => {
    // status === false ? setStatus(true) : setStatus(false);
  };
  useEffect(()=>{
   handelClick(status)
  },[status])
  return (
    <div>
        <SetTripContext.Provider value={{ handelClick, status }} >
            {children}
        </SetTripContext.Provider>
    </div>
  )
}

export default TripAuth