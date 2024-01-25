import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { logout } from "../services/operations/authAPI"

const useApiErrorHandler = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleApiError = (error) => {
    console.log("API ERROR............", error)

    // Display a toast message with the error
    toast.error(error.message)

    // Check for specific token-related errors
    if (
      error.response &&
      error.response.data &&
      error.response.data.success === false &&
      [
        "Token is invalid",
        "Token is missing",
        "Something went wrong while validating the token",
      ].includes(error.response.data.message)
    ) {
      // Dispatch the logout action and show a toast message
      dispatch(logout(navigate))
      toast.error("Your session has expired. Please log in again.")
    }
  }

  // Cleanup logic can be added here if necessary

  return { handleApiError }
}

export { useApiErrorHandler }
