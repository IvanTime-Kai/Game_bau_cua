const initialState = {
    danhSachCuoc : [
        {ma : 'bau', hinhAnh : './img/BaiTapGameBauCua/calabash.svg', diemCuoc : 0},
        {ma : 'cua', hinhAnh : './img/BaiTapGameBauCua/crab.svg', diemCuoc : 0},
        {ma : 'tom', hinhAnh : './img/BaiTapGameBauCua/shrimp.svg', diemCuoc : 0},
        {ma : 'ca', hinhAnh : './img/BaiTapGameBauCua/fish.svg', diemCuoc : 0},
        {ma : 'ga', hinhAnh : './img/BaiTapGameBauCua/rooster.svg', diemCuoc : 0},
        {ma : 'nai', hinhAnh : './img/BaiTapGameBauCua/deer.svg', diemCuoc : 0}
    ],
    tongDiem : 1000,
    mangXucXac : [
        {ma : 'ca', hinhAnh : './img/BaiTapGameBauCua/fish.svg'},
        {ma : 'ga', hinhAnh : './img/BaiTapGameBauCua/rooster.svg'},
        {ma : 'nai', hinhAnh : './img/BaiTapGameBauCua/deer.svg'}
    ]
}

const BaiTapGameBauCuaReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DAT_CUOC_BAU_CUA' : {
            // quan cuoc nao click se tang giam diem
            const danhSachCuocUpdate = [...state.danhSachCuoc]
            const index = danhSachCuocUpdate.findIndex( p => p.ma  === action.quanCuoc.ma)
            if(index !== -1){
                if (action.tangGiam) {
                    if(state.tongDiem > 0){
                        danhSachCuocUpdate[index].diemCuoc += 100;
                        state.tongDiem -= 100;
                    }
                    
                }else {
                    if(danhSachCuocUpdate[index].diemCuoc > 0 ){
                        danhSachCuocUpdate[index].diemCuoc -= 100
                        state.tongDiem += 100
                    }
                }
                
            }
            state.danhSachCuoc = danhSachCuocUpdate
            return {...state}
        }
        case 'PLAY_GAME_BAU_CUA' : {
            const mangXucXacNgauNhien = []
            for(let i = 0; i < 3; i++ ){
                let soNgauNhien = Math.floor(Math.random() * 6);
                const xucXacNgauNhien = state.danhSachCuoc[soNgauNhien];
                mangXucXacNgauNhien.push(xucXacNgauNhien)
            }
            state.mangXucXac = mangXucXacNgauNhien
            //return {...state}

            mangXucXacNgauNhien.forEach((xucXacNN, i) => {
                // findIndex tim ra roi no dung ali khong tim tiep nua
                const index = state.danhSachCuoc.findIndex( p => p.ma === xucXacNN.ma)
                if(index !== -1){
                    state.tongDiem += state.danhSachCuoc[index].diemCuoc
                    //state.danhSachCuoc = [...state.danhSachCuoc, danhSachCuoc.diemCuoc : 0]
                }
            })

            // xy ly hoan tien
            state.danhSachCuoc.forEach((item, i) => {
                let index = mangXucXacNgauNhien.findIndex(p => p.ma === item.ma)
                if(index !== -1){
                    state.tongDiem += item.diemCuoc
                }
            })

            
            state.danhSachCuoc = state.danhSachCuoc.map((qc, index) => {
                return {...qc,diemCuoc : 0}
            })
            return {...state}
        }
        case 'CHOI_LAI' : {
            state.tongDiem = 1000;
            state.danhSachCuoc = state.danhSachCuoc.map((qc, index) => {
                return {...qc,diemCuoc : 0}
            })
            return {...state}
        }
    default:
        return state
    }
}

export default BaiTapGameBauCuaReducer
