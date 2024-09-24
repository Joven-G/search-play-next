'use client'
import Item from './Item';

const SideBarCategory = ({ index, check1DArray, images, setIsHintMessageVisible }) => {
  const checkedCount = check1DArray.filter(c => c).length;

  return (
    <div className='flex flex-col gap-2 border rounded-xl p-1 bg-blue-50 border-black'>
      <div className='flex flex-col justify-start items-start'>
        <span className='px-1 py-1'>Music</span>
        {checkedCount < 5 &&
          <div className='rounded-full px-2 bg-blue-100'> {checkedCount} / 5</div>
        }
        {checkedCount == 5 &&
          <span>Review</span>
        }
      </div>
      <div className='flex flex-col gap-1'>
        <Item itemImage={`${index * 5 + 1}_hover.png`} isChecked={check1DArray[0]} isSelected={images[index * 5 + 0].isSelect} SetIsSelected={() => setIsHintMessageVisible(index, 0)} />
        <Item itemImage={`${index * 5 + 2}_hover.png`} isChecked={check1DArray[1]} isSelected={images[index * 5 + 1].isSelect} SetIsSelected={() => setIsHintMessageVisible(index, 1)} />
        <Item itemImage={`${index * 5 + 3}_hover.png`} isChecked={check1DArray[2]} isSelected={images[index * 5 + 2].isSelect} SetIsSelected={() => setIsHintMessageVisible(index, 2)} />
        <Item itemImage={`${index * 5 + 4}_hover.png`} isChecked={check1DArray[3]} isSelected={images[index * 5 + 3].isSelect} SetIsSelected={() => setIsHintMessageVisible(index, 3)} />
        <Item itemImage={`${index * 5 + 5}_hover.png`} isChecked={check1DArray[4]} isSelected={images[index * 5 + 4].isSelect} SetIsSelected={() => setIsHintMessageVisible(index, 4)} />
      </div>
    </div>
  );
};

export default SideBarCategory;
