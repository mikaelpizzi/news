import { useState } from "react";

const useSelect = (initialState, options) => {
    // Custom hook state
    const [ state, updateState ] = useState('');
    const SelectNews = () => (
        <select
            className="browser-default"
        >
            <option value=''>Select</option>
        </select>
    );

    return [state, SelectNews];
}
 
export default useSelect;