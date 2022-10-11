import { useSelector, useDispatch } from "react-redux"
import camionApi from "../api/camionAPI";
import { onAddVh, onDeleteVh, onListVehiculos, onUpdateVh } from "../store/vehiculosSlice";

export const useVehiculoStore = () => {
    const dispatch = useDispatch();
    const { list_vehiculos } = useSelector(state => state.vehiculos);

    const startGetList = async() => {
        try {
            const { data } = await camionApi.get('/vehiculos');
            dispatch(onListVehiculos(data));
        } catch (e) {
        }
    }

    const startAddVh = async(data) => {
        try {
            await camionApi.post('/vehiculos', data)
            dispatch(onAddVh(data));
        } catch(e) {}
    }

    const startDeleteVh = async(id) => {
        try {
            await camionApi.delete(`/vehiculos/${id}`);
            dispatch(onDeleteVh(id));
        } catch(e) {}
    }

    const startUpdateVh = async(id, data) => {
        try {
            await camionApi.put(`/vehiculos/${id}`, data);
            dispatch(onUpdateVh({id, data}));
        } catch(e) {} 
    }

    return {
        list_vehiculos,
 
        startGetList,
        startAddVh,
        startDeleteVh,
        startUpdateVh
    }
}