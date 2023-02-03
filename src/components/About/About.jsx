import React from 'react'
import Typewrite from 'typewriter-effect';

const About = () => {
  return (
      <section name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
              <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
             <Typewrite options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: ["About"]
            }} /></p>
              </div>
              <p className='text-xl mt-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci perferendis itaque earum consequuntur blanditiis possimus deserunt velit hic laudantium consectetur voluptate magni aut nostrum numquam omnis eligendi doloribus explicabo dolore voluptatibus, sequi eaque. Excepturi soluta at placeat. Obcaecati quasi totam unde incidunt ipsam dicta inventore voluptatum sequi tempora? Nulla, vero!</p>
              <br />
              <p className='text-xl'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae doloribus omnis facere illum fuga nihil veniam natus quibusdam? Labore quae dolor fugiat nulla ut harum voluptas quasi explicabo, temporibus iusto neque, facere laboriosam fuga ipsa assumenda error, expedita consequuntur provident. Nihil, nostrum? Quam alias dolorem error suscipit sunt commodi tenetur.
              </p>
      </div>
    </section>
  )
}

export default About
