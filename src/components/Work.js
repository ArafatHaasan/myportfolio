import React from 'react'
import { useState } from 'react'
import { BiChevronsRight } from 'react-icons/bi'
import { BiChevronsLeft } from 'react-icons/bi'
import { ProjectsData } from '../Dummy/ProjectsData'

export const isLoading = (state) => {
  return state
}

const Work = () => {
  const [current, setCurrent] = useState(0)
  const length = ProjectsData.length
  const Next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const Prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(ProjectsData) || ProjectsData <= 0) {
    return null
  }

  return (
    <>
      <section id="work" className="section  md:h-screen md:px-32">
        <div className="flex justify-between items-center mt-0 md:mt-28">
          <h1 className="text-2xl md:text-5xl text-white font-bold border-b-2 border-[#FF1600] inline">
            PROJECTS
          </h1>
          <div className="flex w-[100px] gap-4">
            <BiChevronsLeft
              onClick={Next}
              className="bg-[#F51613] rounded"
              size={25}
              color={'white'}
            />
            <BiChevronsRight
              onClick={Prev}
              className="bg-[#F51613] rounded"
              size={25}
              color={'white'}
            />
          </div>
        </div>

        <div className="flex items-center h-full">
          {ProjectsData.map((project, index) => (
            <div
              key={index}
              className={
                index === current ? 'slide active section px-5' : 'slide'
              }
            >
              <div className="flex flex-col md:flex-row h-full w-full justify-start my-12  shadow-md shadow-white">
                <div className="flex-1">
                  <img
                    style={{ width: '100%', height: '100%' }}
                    src={project.mockup}
                    alt=""
                  />
                </div>
                <div className=" flex flex-1 justify-center items-center flex-col text-left text-white px-4 py-2">
                  <h1 className="text-3xl font-extrabold mb-4">
                    {project.Title}
                  </h1>
                  <p className="text-[20px] w-4/5  text-center my-8 ">
                    {' '}
                    {project.desc}
                  </p>
                  <button className="py-2 px-6 border w-[200px] mx-auto border-[#F51613]  hover:bg-[#F51613] text-white transition-colors duration-100 ">
                    <a href={project.Live}>Live Preview </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Work

/*
  <div name="work" className="w-full md:h-screen bg-gray-900 text-gray-300 ">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="3000"
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full "
      >
        <div className="mb-8">
          <h1 className="inline border-b-2 border-[#FF1600] text-3xl font-bold">
            Work
          </h1>
          <p className="py-3 text-2xl">//Check out some of my recent works.</p>
        </div>
        {/* <Spinner></Spinner> 
        {/* container   } 

        {!Loading ? (
          <Spinner />
        ) : (
          <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Projects.map((project) => (
              <MyProjects myProjects={project} key={project._id}></MyProjects>
            ))}
          </div>
        )}
      </div>
    </div>
 
*/
