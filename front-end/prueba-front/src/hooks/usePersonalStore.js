import { useSelector, useDispatch } from "react-redux"
import camionApi from "../api/camionAPI";
import { onAddPn, onDeletePn, onListPersonal, onUpdatePn } from "../store/personalSlice";

export const usePersonalStore = () => {
    const dispatch = useDispatch();
    const { list_personal } = useSelector(state => state.personal);

    const startGetList = async() => {
        try {
            const { data } = await camionApi.get('/personal');
            dispatch(onListPersonal(data));
        } catch (e) {
        }
    }

    const startAddPn = async(data) => {
        try {
            await camionApi.post('/personal', data)
            dispatch(onAddPn(data));
        } catch(e) {}
    }

    const startDeletePn = async(id) => {
        try {
            await camionApi.delete(`/personal/${id}`);
            dispatch(onDeletePn(id));
        } catch(e) {}
    }

    const startUpdatePn = async(id, data) => {
        try {
            await camionApi.put(`/personal/${id}`, data);
            dispatch(onUpdatePn({id, data}));
        } catch(e) {} 
    }

    return {
        list_personal,
        
        startGetList,
        startAddPn,
        startDeletePn,
        startUpdatePn
    }
}