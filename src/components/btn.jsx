
export const Button = ({title, ...props}) => {
  return (
    <button {...props} className='relative w-fit h-fit'>
        <div className="w-full h-full bg-whiteal"></div>
        <div className="p-3 relative">{title}</div>
    </button>
  )
}
