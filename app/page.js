'use client';
import { useState, useEffect } from 'react';
import SideBarCategory from './components/SideBarCategory';
import ZoomImage from './components/ZoomImage';

const Modal = ({ isVisible, onClose, message }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-row gap-2 justify-center items-center z-20">
      <div className="bg-white p-4 rounded-lg shadow-lg h-[500px] ">
        <h2 className="text-lg font-bold items-center">{message}</h2>
        <h2 className="text-lg font-bold">{message}</h2>
        <h2 className="text-lg font-bold">{message}</h2>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold">{message}</h2>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold">{message}</h2>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold">{message}</h2>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold">{message}</h2>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
      <div className='absolute top-4 right-4 bg-white w-12 h-12 rounded-full items-center justify-center flex' onClick={onClose} >
        <img src='/close.png' className='rounded-full w-8 h-8'/>
      </div>
    </div>
  );
};

const ImageModal = ({ isVisible, onClose, index }) => {
  if (!isVisible) {
    return null;
  }
  console.log(index, "-=-=-=-=")
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="p-4 rounded-lg shadow-lg relative">
        <img src='/giphy.gif' className='w-64 h-64 absolute' />
        <img src={`/images/${index+1}_hover.png`} className='w-64 h-64' />
      </div>
    </div>
  );
};


export default function Home() {
  const [check2DArray, setCheck2DArray] = useState([
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);
  const [imageModalIndex, setImageModalIndex] = useState(0);
  const [isHintMessageVisible, setIsHintMessageVisible] = useState(false)
  const [hintMessage, setHintMessage] = useState("")

  const [images, setImages] = useState([
    { index: 0, itemIndex: 0, isSelect: false, isPassed: false, x: 100, y: 100, hintMessage: " 0 - 0 message" }, // 0
    { index: 0, itemIndex: 1, isSelect: false, isPassed: false, x: 200, y: 200, hintMessage: " 0 - 1 message" }, // 1
    { index: 0, itemIndex: 2, isSelect: false, isPassed: false, x: 300, y: 300, hintMessage: " 0 - 2 message" }, // 2
    { index: 0, itemIndex: 3, isSelect: false, isPassed: false, x: 400, y: 400, hintMessage: " 0 - 3 message" }, // 3
    { index: 0, itemIndex: 4, isSelect: false, isPassed: false, x: 500, y: 500, hintMessage: " 0 - 4 message" }, // 4
    { index: 1, itemIndex: 0, isSelect: false, isPassed: false, x: 100, y: 150, hintMessage: " 1 - 0 message" }, // 5
    { index: 1, itemIndex: 1, isSelect: false, isPassed: false, x: 150, y: 200, hintMessage: " 1 - 1 message" }, // 6
    { index: 1, itemIndex: 2, isSelect: false, isPassed: false, x: 200, y: 250, hintMessage: " 1 - 2 message" }, // 7
    { index: 1, itemIndex: 3, isSelect: false, isPassed: false, x: 250, y: 300, hintMessage: " 1 - 3 message" }, // 8
    { index: 1, itemIndex: 4, isSelect: false, isPassed: false, x: 300, y: 350, hintMessage: " 1 - 4 message" }, // 9
    { index: 2, itemIndex: 0, isSelect: false, isPassed: false, x: 350, y: 400, hintMessage: " 2 - 0 message" }, // 10
    { index: 2, itemIndex: 1, isSelect: false, isPassed: false, x: 400, y: 450, hintMessage: " 2 - 1 message" }, // 11
    { index: 2, itemIndex: 2, isSelect: false, isPassed: false, x: 450, y: 500, hintMessage: " 2 - 2 message" }, // 12
    { index: 2, itemIndex: 3, isSelect: false, isPassed: false, x: 500, y: 550, hintMessage: " 2 - 3 message" }, // 13
    { index: 2, itemIndex: 4, isSelect: false, isPassed: false, x: 550, y: 600, hintMessage: " 2 - 4 message" }, // 14
    { index: 3, itemIndex: 0, isSelect: false, isPassed: false, x: 600, y: 100, hintMessage: " 3 - 0 message" }, // 15
    { index: 3, itemIndex: 1, isSelect: false, isPassed: false, x: 100, y: 200, hintMessage: " 3 - 1 message" }, // 16
    { index: 3, itemIndex: 2, isSelect: false, isPassed: false, x: 200, y: 300, hintMessage: " 3 - 2 message" }, // 17
    { index: 3, itemIndex: 3, isSelect: false, isPassed: false, x: 300, y: 400, hintMessage: " 3 - 3 message" }, // 18
    { index: 3, itemIndex: 4, isSelect: false, isPassed: false, x: 400, y: 500, hintMessage: " 3 - 4 message" }, // 19
    { index: 4, itemIndex: 0, isSelect: false, isPassed: false, x: 500, y: 600, hintMessage: " 4 - 0 message" }, // 20
    { index: 4, itemIndex: 1, isSelect: false, isPassed: false, x: 600, y: 100, hintMessage: " 4 - 1 message" }, // 21
    { index: 4, itemIndex: 2, isSelect: false, isPassed: false, x: 100, y: 200, hintMessage: " 4 - 2 message" }, // 22
    { index: 4, itemIndex: 3, isSelect: false, isPassed: false, x: 200, y: 300, hintMessage: " 4 - 3 message" }, // 23
    { index: 4, itemIndex: 4, isSelect: false, isPassed: false, x: 300, y: 400, hintMessage: " 4 - 4 message" }, // 24
  ]);

  useEffect(() => {
    // Check each row
    check2DArray.forEach((row, rowIndex) => {
      const allTrue = row.every(value => value === true);
      if (allTrue) {

        setModalMessage(`Row ${rowIndex + 1} has all values as true`);

        setTimeout(() => {
          setIsImageModalVisible(false);
          setIsModalVisible(true);
        }, 2400);
      }
    });
  }, [check2DArray]);

  const showImageModal = (index) => {
    // Calculate the row and column correctly
    const row = Math.floor(index / 5);
    const col = index % 5;

    // Proceed only if the entry is not yet `true`
    if (check2DArray[row][col] !== true) {
      setIsImageModalVisible(true);
      setImageModalIndex(index);

      setTimeout(() => {
        setIsImageModalVisible(false);
      }, 2000);
    }
  };

  const changeIsSelected = (index, itemIndex) => {
    setImages(currentImages =>
      currentImages.map((image, idx) => {
        if (idx === (index * 5 + itemIndex)) {
          setIsHintMessageVisible(true)
          setHintMessage(image.hintMessage)
          return {
            ...image,
            isSelect: true
          };
        } else {
          return {
            ...image,
            isSelect: false
          };
        }
      })
    );
  };


  return (
    <div className='flex flex-row gap-2 w-[100vw]'>
      <div className='flex flex-col gap-4 max-h-[100vh] overflow-scroll no-scrollbar p-2'>
        <SideBarCategory index={0} check1DArray={check2DArray[0]} images={images} setIsHintMessageVisible={(index, itemIndex) => changeIsSelected(index, itemIndex)} />
        <SideBarCategory index={1} check1DArray={check2DArray[1]} images={images} setIsHintMessageVisible={(index, itemIndex) => changeIsSelected(index, itemIndex)} />
        <SideBarCategory index={2} check1DArray={check2DArray[2]} images={images} setIsHintMessageVisible={(index, itemIndex) => changeIsSelected(index, itemIndex)} />
        <SideBarCategory index={3} check1DArray={check2DArray[3]} images={images} setIsHintMessageVisible={(index, itemIndex) => changeIsSelected(index, itemIndex)} />
        <SideBarCategory index={4} check1DArray={check2DArray[4]} images={images} setIsHintMessageVisible={(index, itemIndex) => changeIsSelected(index, itemIndex)} />
      </div>
      <div className='max-h-[100vh] w-full flex-grow p-2'>
        <div className='border rounded-xl relative overflow-hidden border-black w-full h-full'>
          <ZoomImage className="border border-black rounded-xl"
            setCheck2DArray={setCheck2DArray}
            showImageModal={(i) => showImageModal(i)}
            images={images}
            isHintMessageVisible={isHintMessageVisible}
            hintMessage={hintMessage}
          />
        </div>
      </div>
      <Modal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        message={modalMessage}
      />
      <ImageModal
        isVisible={isImageModalVisible}
        index={imageModalIndex}
      />
    </div>
  );
}
