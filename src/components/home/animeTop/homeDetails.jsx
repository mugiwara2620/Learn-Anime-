import { TopAnime } from "./topAnime";
import React from "react";
import Slider from "react-slick";
import './scrolling.css'
import './topAnime.css'
export function HomeDetails() {



  return (
    <div className="flex pt-12  flex-col justify-center">
      <div className="flex pl-8 relative font-bold text-4xl  items-start justify-start lg:ml-11 lg:mb-7 text-yellow-100  ">Top Anime</div>
      <div className="px-10  mobile-top-anime scrolling flex gap-11 overflow-x-auto overflow-y-hidden w-xl mx-10  lg:mx-28  -mt-6 scroll-m-0 scroll-smooth grid-cols-1 mb-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {[1, 2, 3, 4].map((i) => {
          return (
            <TopAnime num={i} />
          )
        })
        }
        {[1, 2, 3, 4].map((i) => {
          return (
            <TopAnime num={i} />
          )
        })
        }
        {[1, 2, 3, 4].map((i) => {
          return (
            <TopAnime num={i} />
          )
        })
        }

      </div>
      <div>
        
      </div>
    </div>

  )
}