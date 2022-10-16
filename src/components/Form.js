import useSelect from '../hooks/useSelect';
import styles from './Form.module.css'

const Form = ({}) => {
    // Use custom hook
    const [ topic, SelectNews ] = useSelect();

    return (  
        <div className={`${styles.searcher} row`}>
            <div className="col s12 m8 offset-m2">
                <form>
                    <h2 className={styles.heading}>Find News By Topic</h2>

                    <SelectNews />

                    <div className="input-field col s12">
                        <input
                            type='submit'
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value='Search'
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Form;