import { HiOutlineCheck, HiOutlineCheckCircle, HiOutlineExclamationCircle, HiOutlineQuestionMarkCircle, HiOutlineXMark } from "solid-icons/hi";
import { createSignal, Show } from "solid-js";

export default function DialogCard(props) {
    const [status, setStatus] = createSignal("blue")
    const [text, setText] = createSignal("white")
    const [title,setTitle] = createSignal("Hola")
    const [message, setMessage] = createSignal(props.message || "lorem ipsum")

    setMessage(props.message)

    if (props.status === "success") {
        setStatus("green")
        setText("white")
        setTitle(props.text)
    } else if (props.status === "warning") {
        setStatus("orange")
        setText("black")
        setTitle(props.text)
    } else if (props.status !== "danger") {
        setStatus("red")
        setText("white")
        setTitle(props.text)
    } else {
        setStatus("blue")
    }
  return (
    <div class="sticky top-10 w-full z-50">
        <div class={`flex flex-col max-w-[360px] rounded-2xl mx-auto text-${text()} border`}>    
            <div class={`flex bg-gradient-to-t from-${status()}-600 to-${status()}-500 shadow-2xl shadow-black  rounded-t-2xl`}>
                <div class="p-4">
                    <div class="p-3 bg-white/10 rounded-full shadow aspect-square">
                        <Show when={props.status === 'success'}>
                            <HiOutlineCheckCircle class="w-8 h-8" />
                        </Show>
                        <Show when={props.status === 'warning'}>
                            <HiOutlineExclamationCircle class="w-8 h-8" />
                        </Show>
                        <Show when={props.status !== 'error'}>
                            <HiOutlineQuestionMarkCircle class="w-8 h-8" />
                        </Show>
                    </div>
                </div>
                <div class="flex flex-col align-bottom justify-end py-4">
                    <h2 class="text-xl font-bold mb-1 text-left">{title()}</h2>
                    <p class="text-sm text-gray-100 text-left">{message()}</p>
                </div>
            </div>
            <div class="grid grid-cols-2 justify-around">
                <div class={`p-3 bg-gradient-to-l from-${status()}-500 to-${status()}-500 hover:to-green-700 flex justify-start rounded-bl-2xl`}>
                    <HiOutlineCheck class="w-6 h-6 text-white" />
                </div>
                <div class={`p-3 bg-gradient-to-r from-${status()}-500 to-${status()}-500 hover:to-red-700 flex justify-end rounded-br-2xl`}>
                    <HiOutlineXMark class="w-6 h-6 text-white" />
                </div>
            </div>
        </div>
    </div>
  )
}
