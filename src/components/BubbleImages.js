import '../index.css'
import '../App.css'
import '../App2.css'

import Img1 from '../images/hero-shot-768@1x-a5eaa71e75fe976006efc216bfe2a152.png'
import Img2 from '../images/hero-directory-list-768@1x-2ff423fa6478669cbbd726078b1690eb.png'
const BubbleImages = () => {
    return (
        <div class="Faces_Faces__2lVB7">
            <div class="Faces_FacesInner__2oVb_">
                {/*INNNER 1*/}
                <div class="Faces_Screenshot__3MeUk">
                    <div class="Faces_ScreenshotInner__156uG Faces_visible__2WvRN">
                        <picture>
                            {/* <source type="image/webp" srcset="
        /_next/static/images/hero-shot-768@1x-faa2dcd9af3d75e4275464499793b660.webp   768w,
        /_next/static/images/hero-shot-768@2x-abb8ffaa72e9a101650a0a7064be49b9.webp  1536w,
        /_next/static/images/hero-shot-1280@1x-ca204b35e2f6fa9461468937e7e7e829.webp 1280w,
        /_next/static/images/hero-shot-1280@2x-36939225fc11a034224b3254b04ff25c.webp 2491w
        " sizes="(max-width: 768px) 768px, 1280px" />
      <source type="image/png" srcset="
        /_next/static/images/hero-shot-768@1x-a5eaa71e75fe976006efc216bfe2a152.png   768w,
        /_next/static/images/hero-shot-768@2x-3306057e98e62a81d8c075e95a6ff380.png  1536w,
        /_next/static/images/hero-shot-1280@1x-2a9fb059fe330ecb0d56e3417c4abeb0.png 1280w,
        /_next/static/images/hero-shot-1280@2x-70d287872db3b95e61cb0b848c636e4d.png 2491w
        " sizes="(max-width: 768px) 768px, 1280px" /> */}
                            <img alt="The main screen of Humaans, an employee directory" src={Img1} width="768" height="438" />
                        </picture>
                        <div class="Faces_DirectoryTrack__o-iVb">
                            <div style={{ transform: 'translate3d(0px, -132.129px, 0px)' }}>
                                <picture>
                                    {/* <source type="image/webp" srcset="
            /_next/static/images/hero-directory-list-768@1x-23978185cd4ae995c961c131d125bf19.webp  768w,
            /_next/static/images/hero-directory-list-768@2x-f74b351e4f4b4e0d1188f103eead1288.webp 1536w,
            /_next/static/images/hero-directory-list-930@1x-8a1cebf83c66c747734b696b61ee9b49.webp  930w,
            /_next/static/images/hero-directory-list-930@2x-619f201188001e335dbf0c8c80389b22.webp 1860w
            " sizes="(max-width: 768px) 768px, 930px" />
          <source type="image/png" srcset="
            /_next/static/images/hero-directory-list-768@1x-2ff423fa6478669cbbd726078b1690eb.png  768w,
            /_next/static/images/hero-directory-list-768@2x-2d6aa62c03b37af9f662d08855b4141b.png 1536w,
            /_next/static/images/hero-directory-list-930@1x-f21c65eb72ceb66aeb0bfb5f3153eb17.png  930w,
            /_next/static/images/hero-directory-list-930@2x-79f777d248943ae4b20e9181ceae55aa.png 1860w
            " sizes="(max-width: 768px) 768px, 930px" /> */}
                                    <img alt="Employee directory" src={Img2} s width="768" height="865" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
                    



            </div>
        </div>

    )
}

export default BubbleImages;