import { createSignal, Show } from "solid-js";
import { HiSolidArrowUp } from "solid-icons/hi";
import { Motion } from "@motionone/solid";

const ProfileCard = () => {
  const [isExpanded, setIsExpanded] = createSignal(false);

  const toggleExpand = () => setIsExpanded(!isExpanded());

  const moveUp = isExpanded === true ? "" : "";

  return (
    <div class="relative max-w-sm mx-auto bg-white shadow-lg rounded-md ">
        <div class="">
            <img src="/images/std3434.png" alt="" />
        </div>
        <div class={`absolute bg-white w-full max-w-sm p-4 bottom-0 ${moveUp}`}>
            <div class="flex justify-between">
                <p class="font-bold">name</p>
                <button onClick={()=>setIsExpanded(!isExpanded())}>
                    <HiSolidArrowUp />
                </button>
            </div>
            <Show when={isExpanded()} >
                <Motion.div class=""
                    initial={{ opacity: 0, scale: '0%' }}
                    animate={{ opacity: 1, scale: '100%' }}
                    transition={{ duration: 1 }}
                >
                    <p>hey</p>
                    <p>hello</p>
                </Motion.div>
            </Show>
        </div>
    </div>
  );
};

export default ProfileCard;
