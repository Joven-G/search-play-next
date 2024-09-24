import Image from 'next/image';
import { useState } from 'react';

const Item = ({ isChecked = false, itemImage = "" , isSelected, SetIsSelected}) => {
  return (
    <div className={`flex flex-row justify-between items-center relative rounded-xl p-4 bg-white ${isChecked ? ' border border-2 border-green-400' : isSelected ? 'border border-2 border-blue-400':"border border-2 border-white"}`}
      onClick={()=>SetIsSelected(!isSelected)}>
      <Image src={`/images/${itemImage}`} alt="Music Icon" width={60} height={60} objectFit="contain" />
      {isChecked && (
        <div className='absolute right-[2px] top-[2px]'>
          <Image src="/check.png" alt="Checkmark" width={32} height={32} objectFit="contain" />
        </div>
      )}
    </div>
  );
};

export default Item;
