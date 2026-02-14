export default function AnimalList(){
    const animals = ['Lion', 'Tiger', 'Cow', 'Snake', 'Lizard'];

    return(
        <div>
            <h1>Animals:</h1>
            <ul> 
                {
                    animals.map((animal) => {
                        return <li key={animal}>{animal}</li>;
                    })
                }
            </ul>
        </div>
    );
}
