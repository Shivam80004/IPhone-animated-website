import gsap from "gsap"
import {useGSAP} from "@gsap/react"
import {rightImg, watchImg} from "../utils"
import {VideoCarousel} from "./VideoCarousel"
export const Hightlight = () => {
  useGSAP(()=>{
    gsap.to('#tittle',{
      opacity:1, y:0
    })
    gsap.to('.link', {
      opacity:1,y:0,duration:1,stagger: 0.25
    })
  })
  return (
    <section id="hightlights" className="w-screen h-full overflow-hidden common-padding bg-zinc">
        <div className="screen-max-width">
           <div className="mb-12 w-full md:flex items-end justify-between">
                <h1 id="tittle" className="section-heading">Get the Highlights.</h1>

                <div className="flex flex-wrap items-end gap-5">
                   <p className="link">Watch the film
                   <img src={watchImg} alt="watch" 
                   className="ml"/>
                   </p>

                   <p className="link">Watch the Event
                   <img src={rightImg} alt="right" 
                   className="ml"/>
                   </p>
                </div>
           </div>
        </div>
        <VideoCarousel />
    </section>
  )
}
