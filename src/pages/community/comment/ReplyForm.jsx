import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeInput, onAdd } from '../../../store/modules/commentSlice';

const ReplyForm = () => {
    const {text} = useSelector(state => state.comment)
    const dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(onAdd(text))
        dispatch (changeInput(''))
        if (!text) return
    }
    return (
        <form onSubmit={onSubmit} >
            <input type="text" value={text} onChange={(e)=>dispatch(changeInput(e.target.value))} />
            <button type="submit" onClick={()=>dispatch(onAdd(id))} >추가</button>
        </form>

    );
};

export default ReplyForm;
