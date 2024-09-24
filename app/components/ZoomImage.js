import React, { Component, useState, useRef, useEffect } from "react";
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="tools flex flex-col border border-black bg-white shadow-lg rounded-xl ">
      <button className="w-10 h-10 text-lg" onClick={() => zoomIn()}>+</button>
      <button className="w-10 h-10 text-lg" onClick={() => zoomOut()}>-</button>
      {/* <button className="" onClick={() => resetTransform()}>x</button> */}
    </div>
  );
};

const ScoreItem = ({ score }) => {
  return (
    <div className="border border-black bg-white shadow-lg rounded-xl p-2 h-12">
      {score} /25
    </div>
  )
}

const HelpAndSound = ({ isMuted, muteIconClicked, helpIconClicked }) => {
  return (
    <div className="flex flex-row gap-4">
      <div className="bg-white shadow-lg rounded-full w-12 h-12 border-black border justify-center items-center flex text-2xl" onClick={helpIconClicked}>
        ?
      </div>
      <div className="bg-white shadow-lg rounded-full w-12 h-12 border-black border justify-center items-center flex text-2xl" onClick={muteIconClicked}>
        {!isMuted ? (
          <img src="/mute.png" className="rounded-full" width={24} height={24} />
        ) : (
          <img src="/unmute.png" className="rounded-full" width={24} height={24} />
        )}
      </div>
    </div>
  );
};

const HintMessage = ({ isHintMessageVisible, hintMessage, rotationAngle }) => {
  if (isHintMessageVisible == true) {
    return (
      <div className="bg-white p-2 shadow-lg rounded-lg max-w-xs border-black border justify-center items-center flex flex-row gap-2">
        <div className="flex-grow">
          <span className="text-xs text-gray-500 font-bold">Hint</span>
          <p className=" text-sm  text-gray-800">{hintMessage} </p>
        </div>
        <img src="/compass.png" className="rounded-full" width={32} height={32}
          style={{ transform: `rotate(${rotationAngle}deg)` }} />
      </div>
    );
  } else {
    return null
  }
};

const ZoomImage = ({ setCheck2DArray, showImageModal, images, isHintMessageVisible = false, hintMessage = "The most searched fictional princess just washed ashore." }) => {

  const [isClickedImage, setIsClickedImage] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [score, setScore] = useState(0);


  const handleImageClicked = (i) => {
    showImageModal(i);

    setScore(prevValue => {
      return prevValue + 1
    })

    setCheck2DArray(prevArray => {
      const new2DArray = [...prevArray];
      new2DArray[images[i].index][images[i].itemIndex] = true
      return new2DArray
    })

  }

  const handleMuteClicked = () => {
    setIsMuted(!isMuted)
  }

  const handleHelpClicked = () => {

  }

  return (
    <TransformWrapper doubleClick={{ step: 0.3 }} >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <>
          <TransformComponent
            wrapperStyle={{ height: '100%', width: '100%' }}
            contentStyle={{ height: '100%', width: '100%' }} >
            <div className="w-full h-full">
              {images.slice(0, 10).map((image, index) => (
                <div
                  key={index}
                  className={`absolute left-[${image.x}px] top-[${image.y}px]`}
                  onClick={() => handleImageClicked(index)}
                >
                  <img
                    src={`/images/${image.index * 5 + image.itemIndex + 1}.png`}
                    className="w-16 h-16"
                  />
                </div>
              ))}

              <img src="/background.jpg" alt="test" className="w-full h-full object-cover" />
            </div>

          </TransformComponent>
          <div className="absolute flex justify-center w-full bottom-4 z-10">
            <HintMessage isHintMessageVisible={isHintMessageVisible} hintMessage={hintMessage} rotationAngle={110}/>
          </div>
          <div className="absolute right-4 bottom-4 z-10">
            <Controls />
          </div>
          <div className="absolute right-4 top-4 z-10">
            <ScoreItem score={score} />
          </div>
          <div className="absolute left-4 top-4 z-10">
            <HelpAndSound isMuted={isMuted} muteIconClicked={handleMuteClicked} helpIconClicked={handleHelpClicked} />
          </div>
        </>
      )}
    </TransformWrapper>
  );
};

export default ZoomImage;