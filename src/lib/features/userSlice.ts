import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isErrored } from 'stream';

//definir que datos se guardaran
interface UserState {
    name: string
}
//inicializar vacia
const initialState: UserState = {
    name: ''
}
//creamos el slice
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //funcion para guardar el nombre
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        //logout
        clearUser: (state) => {
            state.name = '';
        }
    }
});

//exportar la accion para usarla en componentes
export const { setName, clearUser } = userSlice.actions;

//exportamos el reducer para el store
export default userSlice.reducer;