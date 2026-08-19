import React from 'react'

const useFormatCurrency = ({value = 0,isCurrency = false}) => {
  const convertToPersian = value.toLocaleString("fa-IR")
  return (
    <div>useFormatCurrency</div>
  )
}

export default useFormatCurrency