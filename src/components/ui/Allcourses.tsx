
import { courses } from '@/Data/Data_music.json'
import { CardBody, CardContainer, CardItem } from './3d-card'

const Allcourses = () => {
  return (
    <div className="min-h-screen py-20 pt-36">
      <div className="justfy-center text-center relative text-teal-600 font-bold text-3xl">Total Courses ({courses.length})</div>
      <div className="max-w-5xl mx-auto px-8">
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-20 -mt-10'>
      {courses.map((course) => (
          <CardContainer className="inter-var" key={course.id}>
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
            {course.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {course.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={course.image} height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem>
                <div>
                  <p className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    {course.instructor}
                    <p>
                    {course.price}
                    </p>
                  </p>
                </div>
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
               
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Entroll Now →
              </CardItem>
             
            </div>
          </CardBody>
        </CardContainer>
      ))}
      </div>
    </div>
    </div>
  )
}

export default Allcourses