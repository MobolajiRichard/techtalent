import connect from '../asset/image/connect.png'

const Connect = () => {
  return (
    <div className="bg-[#004DB3] flex flex-col items-center text-white font-satoshi py-20">
        <p className='text-[8px] md:text-base'>JOIN OUR COMMUNITY</p>
        <p className='font-clash text-[24px] text-center md:text-[56px] md:w-[70%] mb-3 mt-3'> Are you ready to connect with the future talent of the tech world</p>
        <p className='text-[8px] md:text-base'>Meet Up With Other Techstars And Grow Together</p>
        <img src={connect}/>
        <button className='p-4 text-[#004DB3] bg-white rounded-lg font-bold mt-10 '>Join Our Community</button>
    </div>
  )
}

export default Connect