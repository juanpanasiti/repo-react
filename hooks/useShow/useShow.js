import { useState } from "react"

export const useShow = (initialState = false) => {
  const [show, setShow] = useState(initialState)

  const handleShow = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  const toggleShow = () => {
    setShow(!show)
  }


  return {show, handleShow, handleClose, toggleShow}
}
