const today = new Date();

function formatDate(dt){
    return new Intl.DateTimeFormat('en-US', {weekday:'long'}).format(dt);
}

export default function TodoList(){
    return (
        <h1>To Do list for {formatDate(today)}</h1>
    );
}