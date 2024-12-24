import { A } from "@solidjs/router"
import { createSignal } from "solid-js"
import { usePopSolid } from "~/components/PopSolid/PopSolidManager"

export default function index() {

  const [phone, setPhone] = createSignal("")
  const [password, setPassword] = createSignal("")
  const { addToast } = usePopSolid()

  const handleSubmit = (e) => {
    e.preventDefault()

    addToast('info', "Under development")

    console.log(phone(), ' : ', password())
  }

  return (
    <div class="min-h-screen w-full px-12 flex justify-center items-center">
      <div class="flex flex-col gap-y-4 p-6 rounded-lg bg-white shadow-lg w-[350px]">
        <img src="/mains/color-wide.webp" alt="classwix" width={220} class="mx-auto" />
        <h2 class="text-xl text-blue-600 font-extrabold text-center">
          Welcome Back
        </h2>
        <div>
          <form onSubmit={handleSubmit}>
            <div class="flex flex-col mb-3">
              <label htmlFor="phone" class="font-semibold mb-2 text-sm">Phone Number</label>
              <input 
                type="text" 
                id="phone"
                name="phone"
                value={phone()}
                onInput={(e)=>setPhone(e.currentTarget.value)}
                placeholder="9876543210"
                class="outline-none py-1.5 px-4 rounded-md border-2 border-blue-200"
              />
            </div>
            <div class="flex flex-col min-w-sm mb-3">
              <label htmlFor="password" class="font-semibold mb-2 text-sm">Password</label>
              <input 
                type="password" 
                id="password"
                name="password"
                value={password()}
                onInput={(e)=>setPassword(e.currentTarget.value)}
                placeholder=""
                class="outline-none py-1.5 px-4 rounded-md border-2 border-blue-200 max-w-[300px]"
              />
            </div>
            <div class="flex">
              <button type="Submit" class="bg-blue-600 mt-4 w-full rounded-md px-4 py-1.5 text-white font-semibold mx-auto shadow-md">
                Login
              </button>
            </div>
          </form>
          <div class="py-4">
            <p class="text-sm text-blue-600 tracking-wider">
              Don't have account? 
              <A href="/signup" class="text-orange-600" >Signup</A>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
