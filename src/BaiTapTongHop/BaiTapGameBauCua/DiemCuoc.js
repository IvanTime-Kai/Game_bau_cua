import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function DiemCuoc(props) {


    const dispatch = useDispatch()

    const tongDiem = useSelector(state => state.BaiTapGameBauCuaReducer.tongDiem)


    return (
        <div>
            <h3  className="text-center display-4" >GAME BAU CUA IVANTIME </h3>
            <div className="text-center mt-5">
                <span className="display-4 bg-danger ">Tien thuong: <span className="text-warning">{tongDiem.toLocaleString()}$</span></span>
            </div>
            <div className="text-center">
                <button onClick={() => {
                    dispatch({
                        type : 'CHOI_LAI'
                    })
                }} className="btn btn-success mt-5" style={{fontSize:'24px', borderRadius:'5%', border: 'none'}}>Choi lai</button>
            </div>
        </div>
    )
}
