import React, { useState } from "react"

interface UserData {
  name: string;
  story: string;
  step: string[];
  task: string[];
  feeling: string[];
  feedback: string[];
}

interface JourneyProps {
  users: UserData[];
}

const Journey: React.FC<JourneyProps> = ({ users }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentUser = users[currentIndex]

  const handleNextUser = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length)
  }

  return (
    <div className="col-start-1 col-span-8 border-solid border border-neutral-200 overflow-hidden rounded-lg p-6">
      <div className="flex flex-row justify-content justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="m-0 font-gilroy font-semibold text-5 text-left text-grey-700">{currentUser.name}</h1>
          <p className="m-0 font-gilroy font-300 text-4 text-left text-grey-500">
            {currentUser.story}
          </p>
        </div>
        <div className='sm:ml-16 sm:mt-0 sm:flex-none flex flex-row gap-1.5 items-center justify-center cursor-pointer group'>
          <button
            type="button"
            className="link hover:text-blue hover:border-blue bg-transparent"
            onClick={handleNextUser}
          >
            next user
          </button>

          <div className='py-2 flex h-full items-center justify-center'>
            <svg className='text-green group-hover:text-blue animate-pulse' style={{ animationDelay: '0s' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
              <path d="M4.91967 14.0067C5.24633 14.3334 5.773 14.3334 6.09967 14.0067L11.6397 8.4667C11.8997 8.2067 11.8997 7.7867 11.6397 7.5267L6.09967 1.9867C5.773 1.66003 5.24633 1.66003 4.91967 1.9867C4.593 2.31337 4.593 2.84003 4.91967 3.1667L9.74633 8.00003L4.913 12.8334C4.593 13.1534 4.593 13.6867 4.91967 14.0067V14.0067Z" fill="currentColor" />
            </svg>
            <svg className='text-green group-hover:text-blue animate-pulse' style={{ animationDelay: '0.3s' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
              <path d="M4.91967 14.0067C5.24633 14.3334 5.773 14.3334 6.09967 14.0067L11.6397 8.4667C11.8997 8.2067 11.8997 7.7867 11.6397 7.5267L6.09967 1.9867C5.773 1.66003 5.24633 1.66003 4.91967 1.9867C4.593 2.31337 4.593 2.84003 4.91967 3.1667L9.74633 8.00003L4.913 12.8334C4.593 13.1534 4.593 13.6867 4.91967 14.0067V14.0067Z" fill="currentColor" />
            </svg>
            <svg className='text-green group-hover:text-blue animate-pulse' style={{ animationDelay: '0.6s' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
              <path d="M4.91967 14.0067C5.24633 14.3334 5.773 14.3334 6.09967 14.0067L11.6397 8.4667C11.8997 8.2067 11.8997 7.7867 11.6397 7.5267L6.09967 1.9867C5.773 1.66003 5.24633 1.66003 4.91967 1.9867C4.593 2.31337 4.593 2.84003 4.91967 3.1667L9.74633 8.00003L4.913 12.8334C4.593 13.1534 4.593 13.6867 4.91967 14.0067V14.0067Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th scope="col" className="">
                  </th>
                  {currentUser.step.map((step, index) => (
                    <th key={index} scope="col" className="px-2 typography">
                      <div className="py-1.5 text-center font-gilroy body-md font-medium text-white bg-primary rounded-md">{step}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="whitespace-nowrap text-left py-3 px0 font-gilroy font-400 text-4 text-grey-600">
                    Task
                  </td>
                  {currentUser.task.map((taskItem, index) => (
                    <td key={index} className="whitespace-nowrap text-left py-3 px-2 font-gilroy font-300 text-4 text-grey-600">
                      {taskItem}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="whitespace-nowrap text-left py-3 px0 font-gilroy font-400 text-4 text-grey-600">
                    Feeling
                  </td>
                  {currentUser.feeling.map((emotion, index) => (
                    <td key={index} className="whitespace-nowrap text-left py-3 px-2 font-gilroy font-300 text-4 text-grey-600">
                      {emotion}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="whitespace-nowrap text-left py-3 pr-8 font-gilroy font-400 text-4 text-grey-600">
                    Improvement Opportunity
                  </td>
                  {currentUser.feedback.map((issue, index) => (
                    <td key={index} className="whitespace-nowrap text-left py-3 px-2 font-gilroy font-300 text-4 text-grey-600">
                      {issue}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journey