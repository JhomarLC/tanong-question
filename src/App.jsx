import { useState } from "react"
import { questions } from "./assets/quizData"
import m1 from "./assets/img/memory1.jpg"
import m2 from "./assets/img/memory2.jpg"
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const currentQuestionNumber = currentQuestion + 1
  const totalQuestions = questions.length

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleHideModal = () => {
    setShowModal(false)
  }

  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center">
      {showScore ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-lg">
            Your score: {score} out of {totalQuestions}
          </p>
          <button
            className="mt-4 px-4 py-2 bg-black hover:bg-gray-800 text-white rounded"
            onClick={handleShowModal}
          >
            View Score Details
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mx-auto w-11/12 md:max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">
            Question {currentQuestionNumber}/{totalQuestions}
          </h2>
          <p className="text-lg">{questions[currentQuestion].question}</p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option.id}
                className="px-4 py-2 bg-black hover:bg-gray-800 text-white rounded"
                onClick={() => handleAnswerOptionClick(option.isCorrect)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded p-8 w-11/12">
            <h2 className="text-2xl font-bold mb-4">
              To My Amazing Girlfriend
            </h2>
            <div className="max-h-80 overflow-y-auto">
              <p className="text-lg">
                My Dearest Baby{" "}
                <span className="font-bold">Jamaica Sambrano</span>,
              </p>

              <p className="text-lg mt-4">
                {score === totalQuestions
                  ? `Hi baby, congrats naka ${score}/${totalQuestions} ka, in short perfect ang baby ko HAHAHAHAH. `
                  : "Alam mo baby kahit di perfect ang nakuha mong score, hindi noon masusukat kung gaano mo ako kamahal. "}
              </p>
              <p className="text-lg mt-4">
                Anyways una sa lahat HAPPY 3rd Monthsary saatin, yieeee look how
                long we've been together, diba katagal na. Gusto ko lang kunin
                itong pagkakataon na ito para sabihin sayo baby na ikaw ang nag
                bibigay ng kaligayahan saakin sa mga panahong kailangan kita
                palagi kang nandiyan. Sobrang thankful ko sayo baby na dumating
                ka sa buhay ko.
              </p>
              <p className="text-lg mt-4">
                Sorry baby kase I don't have any gifts right now, and sorry we
                can't go out today. But, I promise that I will make bawi.
              </p>
              <div className="mt-8 flex flex-col md:flex-row gap-5 items-center">
                <div>
                  <img className="w-full rounded" src={m1} alt="Your Image" />
                  <p className="text-sm mt-2 text-gray-500">
                    University Weak 2nd day
                  </p>
                </div>
                <p className="text-lg mt-4">
                  I heart you, you heart me, we heart each other ayieee!
                  AHHAHAHA. Baby, sobrang thankful ko for everything that
                  happened in my life, it was you, yung nag build saken ng
                  confidence, <span className="font-bold">BINUO</span> mo ako
                  baby.
                </p>
              </div>
              <p className="text-lg mt-4">
                Thank you sa pagiging amazing na girlfriend. Ikaw lang baby ang
                gusto kong makasama habang buhay, wala ng iba pa, and I cherish
                every moment we spend together. I love you more than words can
                express.
              </p>
              <div className="mt-8 flex flex-col md:flex-row gap-5 items-center">
                <div>
                  <img className="w-full rounded" src={m2} alt="Your Image" />
                  <p className="text-sm mt-2 text-gray-500">Blesy in CLSU</p>
                </div>
                <p className="text-lg mt-4">
                  Remember when I always say, I'll be better, I know it's hard
                  for you to believe it kase halos I'm always saying it na eh.
                  So baby I just want you to believe me that I'll be better for
                  you. Ipaparanas ko sayo lahat ng gusto mo maranasan babawi
                  ako, maaring di ko pa magawa mga gusto ko ren gawin ngayon,
                  pero soon I'm gonna make your smile into your ears HAHAHAHAH
                  nudaw. Pero pwera biro, masyado na tayong madaming na miss na
                  special events and special moments together, pero sasabihin ko
                  ulit sayo <span className="font-bold">BABAWI AKO</span>
                </p>
              </div>
              <p className="text-lg mt-4">
                As we continue to walk this journey together, I want you to know
                that I am here for you, through ups and downs. Hindi ka
                nag-iisa, andito ako sayo palagi isa tayong team, ako pa yung
                future husband mo. Assuming pero yeah, I will make it happen, we
                are together until the end with understanding, and love.
              </p>
              <p className="text-lg mt-4">
                Gustong gusto kita makasama habang buhay, eka nga til death do
                as part. Hanggang humihinga ako dikita iiwan at patuloy kang
                mamahalin. Sa pag gising ko gusto ko ikaw ang una kong makkita,
                pag tumatae ako gusto ko ikaw yung nag aabang sa labas ng CR
                HAHAHAHA. At syempre pag naliligo gusto ko sabay tayo HAHAHAHHA.
                I love you always my baby love, let's go write our own story!
              </p>
              <p className="text-lg mt-4">
                Forever yours,
                <br />
                <span className="font-bold">Jhomar Pogiit</span>
              </p>
            </div>
            <button
              className="mt-8 px-4 py-2 bg-black text-white hover:bg-gray-800 rounded"
              onClick={handleHideModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
