import { createSignal, Show } from "solid-js";
import { HiSolidArrowDown, HiSolidArrowUp, HiSolidChevronDown, HiSolidChevronUp } from "solid-icons/hi";
import { Motion } from "@motionone/solid";

const TeacherCard = (props) => {
  const [isExpanded, setIsExpanded] = createSignal(false);

  return (
    <div class="relative max-w-sm mx-auto bg-white shadow-xl hover:shadow-2xl rounded-md border-2 border-orange-100 rounded-t-lg">
        <div class="">
            <img src={props.image} alt="" />
        </div>
        <div class={`absolute bg-gradient-to-b from-blue-300/90 to-white w-full max-w-sm p-4 bottom-0 `}>
            <div class="flex justify-between">
                <p class="font-bold text-lg">{props.name}</p>
                <button onClick={()=>setIsExpanded(!isExpanded())} >
                    <Show when={!isExpanded()}>
                        <HiSolidChevronUp />
                    </Show>
                    <Show when={isExpanded()} >
                        <HiSolidChevronDown />
                    </Show>
                </button>
            </div>
            <Show when={isExpanded()} >
                <Motion.div class=""
                    initial={{ opacity: 0, scale: '0%' }}
                    animate={{ opacity: 1, scale: '100%' }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p>{props.department}</p>
                    <p>{props.education}</p>
                </Motion.div>
            </Show>
        </div>
    </div>
  );
};

export default TeacherCard;
