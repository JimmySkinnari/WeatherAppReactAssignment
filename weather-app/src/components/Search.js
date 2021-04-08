
const Search = ({search, setInputText, inputText, setGetWeather}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const onSearch = (e) =>{
        e.preventDefault();
        if(inputText === ""){ 

            alert('Please insert search value')
            return
        }

        search(inputText)
        setInputText("");
    }
    
    return(
        <form className="center" onSubmit={onSearch}>
            <input  value={inputText} 
                    onChange={inputTextHandler} 
                    type ="text" 
                    className="todo-input" 
                    placeholder="Search City"
             />        
            <button className="todo-button btn btn-dark" type="submit">
                Search
            </button>
        </form>
    );
};

export default Search;
