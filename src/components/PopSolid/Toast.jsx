import { Motion } from "@motionone/solid";
import { HiOutlineCheckCircle, HiOutlineExclamationCircle, HiOutlineExclamationTriangle, HiOutlineQuestionMarkCircle, HiOutlineXMark, HiSolidXMark } from "solid-icons/hi";
import { createEffect, createSignal, Show } from "solid-js";

export default function Toast(props) {
  const [status, setStatus] = createSignal()
  const [textColor, setTextColor] = createSignal("white")
  const [bgColor, setBGColor] = createSignal("blue");
  const [message, setMessage] = createSignal(props.message || "lorem ipsum")

  createEffect(() => {
    setMessage(props.message);
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
        setTextColor("white");
        break;
      case "error":
        setBGColor(" from-red-600 to-red-500 ");
        setTextColor("white");
        break;
      default:
        setBGColor(" from-blue-600 to-blue-500 ");
        break;
    }
  });

  const Icons = {
    success: <HiOutlineCheckCircle class="w-6 h-6" />,
    error: <HiOutlineQuestionMarkCircle class="w-6 h-6" />,
    info: <HiOutlineExclamationCircle class="w-8 h-8" />,
    warning: <HiOutlineExclamationTriangle class="w-6 h-6" />,
  }

  return (
      <Motion.div 
        class={`flex flex-col max-w-[380px] w-fit min-w-44 rounded-2xl ms-auto text-${textColor()} mt-2 me-2`}
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        <div class={`flex bg-gradient-to-r ${bgColor()} shadow-lg rounded-xl`}>
          <div class="p-3">
            {Icons[status()]}
          </div>
          <div class="flex flex-1 py-1 pe-2">
            <p class=" text-gray-100 font-semibold text-left my-auto truncate overflow-hidden max-w-[320px]">{message()}</p>
          </div>
          {/* <div class="flex p-2">
            <HiSolidXMark class="my-auto " />
          </div> */}
        </div>
      </Motion.div>
  )
}
