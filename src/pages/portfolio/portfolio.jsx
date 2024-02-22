import './portfolio.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

export function Portfolio(){
    const isMobile = window.innerWidth <= 1024;
    gsap.registerPlugin(ScrollTrigger);

       if(isMobile){
        useGSAP(() => {
            gsap.to(".images", { y:15,ease: "power1.in",stagger:0.1,scrollTrigger: {
                trigger: "#portfolio",
                
              }});
          })
       }else{
        useGSAP(() => {
            gsap.to(".images", { y:40,ease: "power1.in",delay:0.1,stagger:0.2,scrollTrigger: {
                trigger: "#portfolio",
                
              }});
          })
       }

    
    return (
        <section id="portfolio">
            <h2>Some cool shots</h2>
           
            <div id='' className='portfolioCont'>
                <h2>portrait</h2>
                <div className='imgCont'>
                <div className='images'>
                    <img src='https://images.squarespace-cdn.com/content/v1/5607a923e4b02ca27d321d51/1601004110095-9LHJYXPGVYT4SG44M0D4/Miwa-200904-98_websize.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://expertphotography.b-cdn.net/wp-content/uploads/2019/04/female-face-girl-with-wind-in-hair.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://images.squarespace-cdn.com/content/v1/56dfd5cc9f7266ed7f04b64d/1585743025040-GY3HNPD08I794TTR7O1M/image-asset.jpeg'/>
                </div>

                <div className='images'>
                    <img src='https://blog.depositphotos.com/wp-content/uploads/2022/05/Creative-Portrait-Photography-Ideas-12.jpg.webp'/>
                </div>
                <div className='images'>
                    <img src='https://i.pinimg.com/736x/c0/e9/56/c0e95669e7070eec96e4067c414a83ff.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://www.thephotoargus.com/wp-content/uploads/2022/02/creative-portrait-photography-light-painting-tutorial.jpg'/>
                </div>
                </div>
            </div>
            

            <div className='portfolioCont'>
            <h2>wildlife</h2>
            <div className='imgCont'>
            <div className='images'>
                    <img src='https://cc-prod.scene7.com/is/image/CCProdAuthor/a-guide-to-wildlife-photography_P1_mobile_360x270?$pjpeg$&jpegSize=200&wid=720'/>
                </div>
                <div className='images'>
                    <img src='https://www.shutterstock.com/image-photo/wildlife-photography-male-lion-haunting-260nw-2296056907.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://thewildlifecollective.com/wp-content/uploads/2020/11/D30I1244-v2-copy-16x9-1-scaled.jpg'/>
                </div>

                <div className='images'>
                    <img src='https://video.cgtn.com/news/2021-04-01/2021-International-Bird-Loving-Day-Love-birds-love-nature-Z6xLk7Y9Es/video/35f150d1c5b6460cb2a6790d31db05e3/35f150d1c5b6460cb2a6790d31db05e3.jpeg'/>
                </div>
                <div className='images'>
                    <img src='https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/b/l/Blue-jay-Matt-Williams.jpg?crop=0%2C11%2C4000%2C3000&wid=640&hei=480&scl=6.25'/>
                </div>
                <div className='images'>
                    <img src='https://cff2.earth.com/uploads/2019/09/15235043/Listening-To-Birds-In-Nature-Found-To-Be-More-Calming-Than-Meditation-App-Listening-to-birds-in-nature-found-to-be-more-calming-than-a-meditation-app-.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://www.intrepidtravel.com/adventures/wp-content/uploads/2016/04/arctic-wildlife-emma.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://www.activewild.com/wp-content/uploads/2019/02/howler-monkey-rainforest-animal-1024x682.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://a-z-animals.com/media/2021/05/Amazing-Rainforest-Animal-header.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://photos.demandstudios.com/getty/article/81/100/90267376.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/capybara-4254528-1920_ver_1.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://i.natgeofe.com/k/43d56c9f-3d35-400c-90f9-b93298bd1aab/ww-rain-forest-animals-tarsier_square.jpg'/>
                </div>
            </div>
            </div>

            <div className='portfolioCont'>
            <h2>landscapes </h2>
            <div className='imgCont'>
            <div className='images'>
                    <img src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/blogs/18725/images/mM87l2ZsQRSawMLLRlFF_FallLandscape7-.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://cff2.earth.com/uploads/2022/11/08110007/Mountain-landscapes2-scaled.jpg'/>
                </div>
            </div>
            </div>

            <div className='portfolioCont'>
            <h2>nature</h2>
            <div className='imgCont'>
            <div className='images'>
                    <img src='https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://blogs.worldbank.org/sites/default/files/styles/hero/public/2022-12/environment_hero.jpg.webp?itok=Hf8gKgjU'/>
                </div>
                <div className='images'>
                    <img src='https://static.theprint.in/wp-content/uploads/2022/07/Untitled-design-10-1.jpg'/>
                </div>
            </div>
            </div>

            <div className='portfolioCont'>
            <h2>weddings</h2>
            <div className='imgCont'>
            <div className='images'>
                    <img src='https://johnstowncastle.ie/wp-content/uploads/sites/4/2023/07/JC-240_websize-1024x683.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://media.glamourmagazine.co.uk/photos/64c77e65d026779dc4c97d5a/master/pass/LEIGH%20ANNE%20PINNOCK%20310723%20default.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://static01.nyt.com/images/2023/12/31/multimedia/REVAMPED-WEDDING-TRENDS-01-pfct/REVAMPED-WEDDING-TRENDS-01-pfct-superJumbo.jpg'/>
                </div>
            </div>
            </div>
        </section>
    )
}