import React from 'react'
import XucXac from './XucXac'
import { useSelector, useDispatch } from 'react-redux'

export default function DanhSachXucXac(props) {


    const dispatch = useDispatch()
    const mangXucXac = useSelector(state => state.BaiTapGameBauCuaReducer.mangXucXac)


    // const renderMangXucXac = () => {
    //     return mangXucXac.map((xucXac, index) => {
    //         return (
    //             <div className="col-6 text-center" style={{marginTop : '20px'}}>
    //                 <XucXac/>
    //             </div>
    //         )
    //     })
    // }
    
    return (
        <div>
            <div className="bg-primary" style={{width: 500, height:500, borderRadius:'50%'}}>
                <div className="row" style={{marginRight: '30px'}}>
                    <div className="col-12 text-center" style={{marginTop : '150px'}}>
                        <XucXac xucXacItem = {mangXucXac[0]}/>
                    </div>
                    <div className="col-6 text-center" style={{marginTop : '20px'}}>
                        <XucXac xucXacItem = {mangXucXac[1]}/>
                    </div>
                    <div className="col-6 text-center" style={{marginTop : '20px'}}>
                        <XucXac xucXacItem = {mangXucXac[2]}/>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5" style={{marginRight: '220px'}}>
            <button onClick={() => {
                dispatch({
                    type : 'PLAY_GAME_BAU_CUA',                  
                })
            }}  className="btn btn-danger">Xoc</button>
            </div>           
        </div>
    )
}
