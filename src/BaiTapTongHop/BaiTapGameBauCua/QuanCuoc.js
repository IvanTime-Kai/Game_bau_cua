import React from 'react'
import { useDispatch } from 'react-redux'
import {useSpring, animated} from 'react-spring'

export default function QuanCuoc(props) {

    const dispatch = useDispatch()

    // muon sai set thi truyen vo mot cai function va tra ve mot cai object
    // tra ve object
    const [propsUseSpring, set, stop] = useSpring(() => {
        return {
        to : {scale: 1.25}, 
        from : {scale:1}, 
        // tra ve cai from 
        reset : true,
    }
    })

    const {quanCuoc} = props
    return (
        <div className="mt-3">
            <img src={quanCuoc.hinhAnh} style={{width: '250px'}} ></img>
            <div className="bg-success mt-2 pd-2 text-center" style={{borderRadius: '20px', width: 250}}>
                
                <animated.button style={{transform : propsUseSpring.scale.interpolate((scale) => `scale(${scale})`)}} onClick={() => {
                    // dung toi tranform phai su dung interpolate no moi nhan cai gia tri ko thi no khong nahn
                    set({scale : 1})
                    set({scale : 1.25})
                    dispatch({
                        type : 'DAT_CUOC_BAU_CUA',
                        quanCuoc : quanCuoc,
                        tangGiam : true
                    })
                }} className="btn btn-danger">+</animated.button>
                <span className="mt-2" style={{color: 'yellow', fontSize: '25'}}>{quanCuoc.diemCuoc}</span>
                <animated.button style={{transform : propsUseSpring.scale.interpolate((scale) => `scale(${scale})`)}} onClick={() => {
                    set({scale : 1.5})
                    dispatch({
                        type : 'DAT_CUOC_BAU_CUA',
                        quanCuoc,
                        tangGiam : false
                    })
                }} className="btn btn-danger">-</animated.button>
            </div>
        </div>
    )
}
