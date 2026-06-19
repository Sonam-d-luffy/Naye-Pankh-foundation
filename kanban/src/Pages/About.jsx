import React from 'react'
import assets from '../assets/assets.js'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  const donate = () => navigate('/donate')

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1a1a] to-[#2b2b2b] text-white ">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col gap-20">

        {/* SECTION 1 */}
        <div className="grid mt-10 md:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <div className="flex justify-center animate-fade-in">
            <img
              src={assets.she3}
              alt="She Can Foundation"
              className="w-full max-w-[26rem] rounded-2xl shadow-xl transform transition duration-700 hover:scale-105"
            />
          </div>

          {/* Text */}
          <div className="animate-slide-up">
            <h1 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
              Our Story
            </h1>
            <p className="text-gray-300 leading-relaxed">
              As we all know, 2020 was a year the world was striving to survive the global pandemic of covid-19. During these dire times we felt an urge to make an impact with whatever we had, and so we tried!! We tried to uplift the underprivileged and help the needy with all our resources and material we could arrange, it was tough but we didn't lose our hope and kept going in order to bring a change everyone was expecting the bigger authorities to bring in the societies on smaller levels.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          
          {/* Text */}
          <div className="animate-slide-up">
            <h1 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
              What is She Can?
            </h1>
            <p className="text-gray-300 leading-relaxed">
              
Nayepankh foundation was initiated to bring a change and help people during the tough times of Covid. Later in the year, the NGO started to expand their operations and provide help to a wider section of the society. With this revamped vision, the NGO acquired the name of NayePankh – giving wings to uplift the underprivileged section of our society. NayePankh is one of the eminent NGOs espoused in providing food, sanitary napkins, clothes, educating underprivileged sectors of our society for the better future. We make efforts to solve daily problems faced by people of India. Most of the young women feel humiliating in public places during their menstrual cycle; to bring change we create awareness campaigns among woman and youths about personal hygiene, providing sanitary napkins. Also, in our endeavour to fight hunger we distribute food not only to the underprivileged community but also to the stray animals. We are also providing clothes to the poor families. Till date we have helped more than two lakhs of people. Although this seems quite a big achievement, but our goal is still not complete, therefore we’re continuing more with hustle.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center animate-fade-in">
            <img
              src={assets.she2}
              alt="Empowering Women"
              className="w-full max-w-[26rem] rounded-2xl shadow-xl transform transition duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="bg-[#111] rounded-2xl p-10 text-center shadow-lg animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-extrabold text-orange-500 mb-4">
            Donate and Make a Difference
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Your contribution helps us empower children, break barriers, and build
            a future where education and opportunity are accessible to all.
          </p>
          <button
            onClick={donate}
            className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 transition transform hover:scale-105"
          >
            DONATE NOW
          </button>
        </div>

      </div>

      {/* Animations */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1.2s ease forwards;
          }

          .animate-slide-up {
            animation: slideUp 1.2s ease forwards;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  )
}

export default About