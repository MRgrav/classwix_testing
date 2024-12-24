import { A } from '@solidjs/router'

export default function AboutSection() {
  return (
    <div class='w-full px-10 mb-4'>
        <hr />
        <h2 class='my-2 font-semibold '>ABOUT US</h2>
        <p class='text-blue-300 text-sm'>
            CLASSWiX is a global learning platform transforming lives through education and music. A
subsidiary of Bipransh EdTech Private Limited, a company registered under the Ministry of
Corporate Affairs (MCA), India, governed by the Companies Act, 2013 (18 of 2013). As such,
we adhere to the company's rules and regulations.</p>
        <A href='/about' class='my-2 text-blue-200 font-bold text-sm pe-4 py-1 rounded-md'>
            Learn More
        </A>
    </div>
  )
}
