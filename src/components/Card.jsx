export default function Card({ children, bg, className }) {
  return (
    <div class={`bg-${bg} ${className} rounded-lg text-card-foreground shadow-sm border-2 border-[#7034a1]/10 hover:shadow-lg`}>
        {children}
    </div>
  )
}
  