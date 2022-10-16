import News from "./News";

const NewsList = ({ news }) => {
    return (  
        <div className="row">
            {news.map(n => (
                <News 
                    key={n.url}
                    n={n}
                />
            ))}
        </div>
    );
}
 
export default NewsList;