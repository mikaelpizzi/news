import useSelect from '../hooks/useSelect';
import styles from './Form.module.css'

const Form = ({ saveTopic }) => {

    const OPTIONS = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Business'},
        {value: 'entertainment', label: 'Entertainment'},
        {value: 'health', label: 'Health'},
        {value: 'science', label: 'Science'},
        {value: 'sports', label: 'Sports'},
        {value: 'technology', label: 'Technology'}
    ]

    // Use custom hook
    const [ topic, SelectNews ] = useSelect('science',  OPTIONS);

    // When user submits pass topic to app.js
    const findNews = e => {
        e.preventDefault();

        saveTopic(topic)
    }

    return (  
        <div className={`${styles.searcher} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={findNews}
                >
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