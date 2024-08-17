"use client";
import Link from "next/link";
import DataSources from "../Data/Data_music.json";
import { BackgroundGradient } from "./ui/background-gradient";

const FeaturedCourses = () => {
  interface Courses {
    id: String;
    title: String;
    slug: String;
    description: String;
    price: number;
    instructor: String;
    isfeatured: Boolean;
    image: String;
  }

  const featuredCourses = DataSources.courses.filter(
    (course: Courses) => course.isfeatured
  );
  return (
    <div className="bg-gray-800 -mt-10">
      <h1 className="mt-5 text-teal-500 font-semibold uppercase text-center leading-8 tracking-tight">
        Featured Courses
      </h1>
      <p className="font-bold text-center justify-center mt-2 text-3xl">
        Learn With Best
      </p>
      <div className="mt-10 text-center mb-10 ">
        <div className="m-10 grid grid-rows-4 gap-10 sm:grid-cols-2 lg:grid-cols-3 text-center justify-center">
          {featuredCourses.map((course: Courses) => (
            <div className="justify-center">
              <BackgroundGradient>
              <div className="flex items-center justify-center mb-5">
            <img 
              src={course.image} 
              className="border-transparent mt-2 w-[400px] rounded-3xl object-cover" 
              alt={course.title} 
            />
          </div> <p> {course.title}</p>
                <p className="m-5"> {course.description}</p>
                <p>Price: {course.price}</p>
                <p>Instructor: {course.instructor}</p>

                <div className="flex justify-center text-center mt-5 mb-5">
                  <Link
                    href={`/allcourses/${course.slug}`}
                    className="border-2 border-gray-500 rounded-3xl px-4 py-2 bg-gray-800 hover:border-green-500 transition duration-300"
                   
                  >
                    Click For Details
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
