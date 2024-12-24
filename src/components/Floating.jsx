import { Motion } from "@motionone/solid";
import { A } from "@solidjs/router";
import { HiSolidPhone } from "solid-icons/hi";
import { DynamoWhatsapp } from "~/icons/DynamoIcons";

export default function Floating() {
    return (
        <div className="fixed z-50 bottom-10 right-10">
            <Motion.div 
                className="rounded-full w-12 h-12  shadow-lg bg-orange-600 flex items-center justify-end mb-3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
            >
                <a href="tel:+1234567890" class="p-3">
                    <HiSolidPhone class="w-6 h-6 text-white" />
                </a>
            </Motion.div>
            <Motion.div
                className="rounded-full w-12 h-12 hover:scale-105 shadow-lg bg-green-600 flex items-center justify-end"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
            >
                {/* <div>
                <p class="text-center w-full text-white">
                    Message
                </p>
            </div> */}
                <A href="https://wa.me/919401400399" class="p-3">
                    <DynamoWhatsapp color="white" />
                </A>
            </Motion.div>
        </div>
    );
}
