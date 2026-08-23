import React from 'react'
import SectionIcon from '../../../components/common/SectionIcon'
import { Check } from 'lucide-react'

const ProductMinorDetail = () => {
  return (
    <div className='w-full h-60 overflow-auto border-2 border-border p-2 rounded-lg mt-4'>
        <span className='flex items-center justify-center border-b-2 border-primary text-primary '>توضیحات محصول</span>
        <div className="mt-2">
            <p className='text-sm'>هدفون بی سیم سونی WH1000XM5 با فناوری حذف نویز پیشرفته و کیفیت صدای بی نظیر تجربه ایی متفاوت از موسیقی را برای شما فراهم میکند</p>
            <div className="flex flex-col items-start space-y-2 mt-2">
                <div className="flex items-center space-x-2">
                    <SectionIcon icon={<Check />} size={4} />
                    <span className='text-xs'>حذف نویز فعال با دو پردازنده قدرتمند</span>
                </div>
                <div className="flex items-center space-x-2">
                    <SectionIcon icon={<Check />} size={4} />
                    <span className='text-xs'>عمر باتری تا 30 ساعت</span>
                </div>
                <div className="flex items-center space-x-2">
                    <SectionIcon icon={<Check />} size={4} />
                    <span className='text-xs'>شارز سریع</span>
                </div>
                <div className="flex items-center space-x-2">
                    <SectionIcon icon={<Check />} size={4} />
                    <span className='text-xs'>طراحی سبک و راحت برای استفاده طولانی</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductMinorDetail