
const Form = ({setInputText, inputText}) => {

    // here i can write javascript code and functions
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const sumbitTodoHandler = (e) => {
        
        e.preventDefault();
        console.log(e.target);
        setInputText("");
    };

    
    return(
        <form className="center">
            <input value={inputText} onChange={inputTextHandler} type ="text" className="todo-input" placeholder="Search City"></input>
            <button className="todo-button" type="submit" onClick={sumbitTodoHandler}>
                Search
            </button>
        </form>
    );
};

export default Form;