
const Form = ({search, setInputText, inputText, setGetWeather}) => {

    // here i can write javascript code and functions
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
                    type ="text" className="todo-input" 
                    placeholder="Search City">

            </input>
            <button className="todo-button btn btn-dark" type="submit">
                Search
            </button>
        </form>
    );
};

export default Form;