import { A } from "@solidjs/router";
import DynamoFacebook, { DynamoYoutube, DynamoInstagram, DynamoTwitter, DynamoWhatsapp } from "~/icons/DynamoIcons";

export default function Social({color}) {
  return (
    <>
        <ul class="flex gap-4 mx-auto ">
            <li class="hover:scale-110 hover:-translate-y-1">
                <A href="facebook.com">
                    <DynamoFacebook color={color} />
                    {/* <img src="/icons/facebook.svg" class="text-white" alt="facebook" /> */}
                </A>
            </li>
            <li class="hover:scale-110 hover:-translate-y-1">
                <A href="https://wa.me/message/NIIDMMZTX773C1">
                    <DynamoWhatsapp color={color} />
                </A>
            </li>
            <li class="hover:scale-110 hover:-translate-y-1">
                <A href="twitter.com">
                    <DynamoTwitter color={color} />
                    {/* <img src="/icons/twitterx.svg" alt="twitterx" />     */}
                </A>
            </li>
            <li class="hover:scale-110 hover:-translate-y-1">
                <A href="instagram.com">
                    <DynamoInstagram color={color} />
                    {/* <img src="/icons/insta.svg" alt="instagram" /> */}
                </A>
            </li>
            <li class="hover:scale-110 hover:-translate-y-1">
                <A href="https://www.youtube.com/@classwix">
                    <DynamoYoutube color={color} />
                    {/* <img src="/icons/youtube.svg" alt="youtube" /> */}
                </A>
            </li>
        </ul>
    </>
  )
}

