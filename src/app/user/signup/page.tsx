import SignupForm from "../../components/SignupForm"
import Link from "next/link"
const page = () => {
  return (
    <div className="d-flex justify-content-center flex-column">page

        <SignupForm></SignupForm>
        <div className="text-center mt-3">

        <Link href="/user/login" className="btn btn-dark">Have an account? Login</Link>
        </div>
    </div>
  )
}

export default page