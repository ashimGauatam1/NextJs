import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="realtive py-4 text-center">
        <h1
          className="text-4xl font-bold mt-10
        bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 
        md:text-7xl"
        >
          Master In The Field OF IT
        </h1>
        <p className="ml-20 mr-20  p-10 space-y-2">
          At CoderDai, we're passionate about helping you conquer the world of
          coding. Whether you’re a beginner eager to learn your first
          programming language or a seasoned developer looking to refine your
          skills, CoderDai is your go-to resource. Our comprehensive tutorials,
          interactive exercises, and expert insights are designed to empower you
          at every stage of your coding journey. Dive into our hands-on projects
          to build real-world skills or explore our in-depth articles to stay
          up-to-date with the latest industry trends. With CoderDai, you’re not
          just learning to code—you’re joining a community of innovators and
          problem-solvers dedicated to pushing the boundaries of technology. Let
          us be your partner in achieving coding excellence and transforming
          your tech dreams into reality.
        </p>
        <div className="flex justify-center flex-row space-x-5">
          <Link
            href={"/allcourses"}
            className="transition duration-300 border-gray-100 border-2 rounded-3xl px-4 py-2 hover:border-green-500"
          >
            Our Courses
          </Link>
          <Link
            href={"/about"}
            className="transition duration-300 border-gray-100 border-2 rounded-3xl px-4 py-2 hover:border-green-500"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
