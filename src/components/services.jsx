export const Services = ({ data }) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>{data?.title}</h2>
          <p>
           {data?.subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}
