export function CreateTodo(){
    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");
    return <div>
        <input type = " text" placeholder = "Title" onChange={
            function(e){
                const value = e.target.value;
                setTitle(value);
            }
        }></input>
        <input type = "text" placeholder = "description" onChange = {
            function(e){
                const value = e.target.value;
                setDescription(value);
            }
        }></input>
        <button onClick = {
            ()=>{
                fetch("http://localhost:3000/todos"),{
                    method : "POST",
                    body : JSON.stringify({
                        title : title,
                        desc : description,
                    }),
                    headers : {
                        "Content-type" : "application/json"
                    }
                }.then(async function(){
                    const json = await res.json()
                })
            }
        }>Add a Todo</button>
    </div>
}
