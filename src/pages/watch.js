import React from 'react'
import video from "../videos/video.mp4"
import "../css/series.css"

const Watch = () => {
  return (
    <div className='watch'>
        <video src={video} loop controls/>
        <div className='desckription'>
            <strong className='videoName'>movie name</strong>
            <p className='videoPara'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, accusamus.</p>
            <div >
                <ol>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default Watch
