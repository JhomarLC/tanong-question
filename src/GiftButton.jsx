import { useSpring, animated } from "react-spring"

const GiftButton = () => {
  const [showLetter, setShowLetter] = useState(false)
  const props = useSpring({
    opacity: showLetter ? 1 : 0,
    transform: showLetter ? "scale(1)" : "scale(0)",
  })

  const handleClick = () => {
    setShowLetter(true)
  }

  return (
    <div className="mt-4">
      {showLetter ? (
        <animated.div style={props}>
          <p className="text-2xl font-bold mb-4">To my dearest girlfriend,</p>
          <p className="text-lg">
            I wanted to express my love and gratitude for having you in my life.
            You bring so much joy, happiness, and warmth to my days. Your
            presence fills my heart with love and your smile brightens up my
            world. Being with you is a blessing, and I cherish every moment we
            spend together.
          </p>
          <p className="text-lg mt-4">
            This gift is a small token of my affection for you. I hope it brings
            a smile to your face and reminds you of the love we share. Thank you
            for being the amazing person you are, and for loving me
            unconditionally. You are the light of my life, and I'm grateful to
            have you by my side.
          </p>
        </animated.div>
      ) : (
        <button
          className="mr-2 mb-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
          onClick={handleClick}
        >
          Open Gift
        </button>
      )}
    </div>
  )
}

export default GiftButton
