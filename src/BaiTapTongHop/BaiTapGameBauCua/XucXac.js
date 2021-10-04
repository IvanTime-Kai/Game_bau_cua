import React,{Fragment} from 'react'
import {useSpring, animated} from 'react-spring'


export default function XucXac(props) {

    const [propsXucXac, set, stop] = useSpring(() => {
        return {
            to : {
                xyz : [360,360,360]
            },
            from : {
                xyz : [0,0,0]
            },
            config : {
                duration : 1000
            },
            reset : true
        }
    })
    set(
        {
            to : {
                xyz : [360,360,360]
            },
            from : {
                xyz : [0,0,0]
            },
            config : {
                duration : 1000
            },
            reset : true
        } 
    )
    let {xucXacItem} = props
    return (
        <Fragment>
            <div className="scene" style={{margin: 'auto'}}>
                <animated.div style={{
                transform : propsXucXac.xyz.interpolate((x,y,z) =>  `translateZ(-40px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`)
            }}  className="cube">
                <img className="ml-3 cube__face front" style={{width: '100%'}} src={xucXacItem.hinhAnh}></img>
                <img className="ml-3 cube__face back" style={{width: '100%'}} src="./img/BaiTapGameBauCua/calabash.svg"></img>
                <img className="ml-3 cube__face left" style={{width: '100%'}} src="./img/BaiTapGameBauCua/crab.svg"></img>
                <img className="ml-3 cube__face right" style={{width: '100%'}} src="./img/BaiTapGameBauCua/shrimp.svg"></img>
                <img className="ml-3 cube__face top" style={{width: '100%'}} src="./img/BaiTapGameBauCua/rooster.svg"></img>
                <img className="ml-3 cube__face bottom" style={{width: '100%'}} src="./img/BaiTapGameBauCua/deer.svg"></img>
                {/* <img className="ml-3 cube__face front" style={{width: '50px'}} src="./img/BaiTapGameBauCua/fish.svg"></img> */}
                </animated.div>
            </div>          
        </Fragment>
    )
}
