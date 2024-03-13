export const Chair = ({ content, price, image, marginTop, marginBottom }) => {
  return (
    <article className='p-4 text-center flex flex-col items-center justify-start'>
      <img
        src={image}
        alt='Chair'
        className={`max-h-full mt-${marginTop} mb-${marginBottom}`}
      />
      <p className='md:w-2/5 mb-2 font-bold'>{content}</p>
      <p className='font-bold'>{price}</p>
    </article>
  )
}
