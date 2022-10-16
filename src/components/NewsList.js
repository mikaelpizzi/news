import New from "./New";

const NewsList = ({ news }) => {
    return (  
        <div className="row">
            {news.map(n => (
                <New />
            ))}
        </div>
    );
}
 
export default NewsList;