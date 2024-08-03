import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
const HomePage = () => {
    const cld = new Cloudinary({cloud: {cloudName: 'dkkvkj82k'}})
    const img = cld
    .image('cld-sample-4')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).width(500).height(500));
    return (
        
        <div className='w-full h-full flex items-center justify-center dark:bg-blue-900 ' > {/* qui mettiamo item principali al centro */}
            <AdvancedImage cldImg={img}/>
        </div>
    );
}

export default HomePage;
