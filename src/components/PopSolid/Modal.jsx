import { Motion } from "@motionone/solid";
import { HiOutlineCheck, HiOutlineCheckCircle, HiOutlineExclamationCircle, HiOutlineQuestionMarkCircle, HiOutlineXMark } from "solid-icons/hi";
import { createEffect, createSignal, Show } from "solid-js";

export default function Modal(props) {
  const [status, setStatus] = createSignal()
  const [textColor, setTextColor] = createSignal("white")
  const [title, setTitle] = createSignal("Hola")
  const [bgColor, setBGColor] = createSignal("blue");
  const [message, setMessage] = createSignal(props.message || "lorem ipsum")

  createEffect(() => {
    setMessage(props.message);
    setTitle(props.title);
    setStatus(props.status);
  });

  createEffect(() => {
    switch (status()) {
      case "success":
        setBGColor(" from-green-600 to-green-500 ");
        setTextColor("white");
        break;
      case "warning":
        setBGColor(" from-orange-600 to-orange-500 ");
        setTextColor("black");
        break;
      case "error":
        setBGColor(" from-red-600 to-red-500 ");
        setTextColor("white");
        break;
      default:
        setBGColor("blue");
        break;
    }
  });
  return (
    <div class='w-full h-screen z-50 fixed bg-black/50 backdrop-blur-sm top-0 left-0 '>
      <Motion.div 
        class={` flex flex-col max-w-[360px] rounded-2xl mx-auto text-${textColor()} `}
        initial={{ scale: 0.3, y:"0" }}
        animate={{ scale:1, y:"37vh" }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        <div class={`flex bg-gradient-to-t ${bgColor()} shadow-xl shadow-black rounded-t-2xl`}>
          <div class="p-4">
            <div class="p-2 bg-white/10 rounded-full shadow aspect-square text-white ">
              <Show when={status() === 'success'}>
                <HiOutlineCheckCircle class="w-12 h-12" />
              </Show>
              <Show when={status() === 'warning'}>
                <HiOutlineExclamationCircle class="w-12 h-12" />
              </Show>
              <Show when={status() === 'error'}>
                <HiOutlineQuestionMarkCircle class="w-12 h-12" />
              </Show>
            </div>
          </div>
          <div class="flex flex-col align-bottom justify-end py-4">
            <h2 class="text-xl text-gray-50 font-bold mb-1 text-left">{title()}</h2>
            <p class="text-sm text-gray-100 text-left truncate">{message()}</p>
          </div>
        </div>
        <div class="grid grid-cols-2 justify-around">
          <div class={`p-3 bg-gradient-to-l from-${bgColor()}-500 to-${bgColor()}-500 hover:to-green-700 flex justify-start rounded-bl-2xl`}>
            <HiOutlineCheck class="w-6 h-6 text-white" />
          </div>
          <div class={`p-3 bg-gradient-to-r from-${bgColor()}-500 to-${bgColor()}-500 hover:to-red-700 flex justify-end rounded-br-2xl`}>
            <HiOutlineXMark class="w-6 h-6 text-white" />
          </div>
        </div>
      </Motion.div>
    </div>
  )
}
