import { A } from "@solidjs/router"
import { createSignal } from "solid-js"
import { usePopSolid } from "~/components/PopSolid/PopSolidManager"

export default function index() {

    const [name, setName] = createSignal("")
    const [email, setEmail] = createSignal("")
    const [phone, setPhone] = createSignal("")
    const [password, setPassword] = createSignal("")
    const [confirmPassword, setConfirmPassword] = createSignal("")
    const { addToast } = usePopSolid()

    const handleSubmit = (e) => {
        e.preventDefault()

        addToast('info', "Under development")

        console.log(phone(), ' : ', password())
    }

    return (
        <div class="min-h-screen w-full px-12 flex justify-center items-center">
            <div class="flex flex-col gap-y-4 p-6 rounded-lg bg-white shadow-lg w-[350px]">
                <img src="/mains/color-wide.webp" alt="classwix" width={160} class="mx-auto" />
                <h2 class="text-lg text-blue-600 font-extrabold text-center">
                    Welcome to CLASSWiX
                </h2>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div class="flex flex-col mb-3">
                            <label htmlFor="name" class="font-semibold text-xs">Student's Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name()}
                                onInput={(e) => setName(e.currentTarget.value)}
                                placeholder=""
                                class="outline-none py-1 px-4 rounded-md border-2 border-blue-200"
                            />
                        </div>
                        <div class="flex flex-col mb-3">
                            <label htmlFor="email" class="font-semibold text-xs">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email()}
                                onInput={(e) => setEmail(e.currentTarget.value)}
                                placeholder=""
                                class="outline-none py-1 px-4 rounded-md border-2 border-blue-200"
                            />
                        </div>
                        <div class="flex flex-col mb-3">
                            <label htmlFor="phone" class="font-semibold text-xs">Phone Number</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={phone()}
                                onInput={(e) => setPhone(e.currentTarget.value)}
                                placeholder=""
                                class="outline-none py-1 px-4 rounded-md border-2 border-blue-200"
                            />
                        </div>
                        <div class="flex flex-col min-w-sm mb-3">
                            <label htmlFor="password" class="font-semibold text-xs">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password()}
                                onInput={(e) => setPassword(e.currentTarget.value)}
                                placeholder=""
                                class="outline-none py-1 px-4 rounded-md border-2 border-blue-200 max-w-[300px]"
                            />
                        </div>
                        <div class="flex flex-col min-w-sm mb-3">
                            <label htmlFor="confirmPassword" class="font-semibold text-xs">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confrimPassword"
                                value={confirmPassword()}
                                onInput={(e) => setConfirmPassword(e.currentTarget.value)}
                                placeholder=""
                                class="outline-none py-1 px-4 rounded-md border-2 border-blue-200 max-w-[300px]"
                            />
                        </div>
                        <div class="flex">
                            <button type="Submit" class="bg-blue-600 mt-4 w-full rounded-md px-4 py-1.5 text-white font-semibold mx-auto shadow-md">
                                Signup
                            </button>
                        </div>
                    </form>
                    <div class="py-4">
                        <p class="text-sm text-blue-600 tracking-wider">
                            Already have an account.
                            <A href="/signin" class="text-orange-600" >Login</A>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
