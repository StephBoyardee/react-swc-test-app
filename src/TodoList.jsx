const person = {
    name: 'Ggeorio Y. Zara',
    theme: {backgounrdColor: 'black',
        color: 'pink'
    }
};

export default function TodoList() {
    return (
      <>
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Ggeorio Y. Zara"
            />
            <ul>
                <li> Improved videophones</li>
                <li> Ate paper</li>
                <li> Fuelled by alcohol</li>
            </ul>
        </div>
        <h1>Hedy Lamarr's Todos</h1>
        <img
          src="https://i.imgur.com/yXOvdOSs.jpg"
          alt="Hedy Lamarr"
          className="photo"
        />
        <ul>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve spectrum technology</li>
        </ul>
      </>
    );
  }