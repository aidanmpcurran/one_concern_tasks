const random = uniqueRandom(1, 1000);

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, filter] = useState("");
  
  useEffect(() => {
    personChange
      .getAll()
      .then(initialPersons => {
      setAllPersons(initialPersons)
    })
  }, [])


  useEffect(() => {
    personChange.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault()
    const person = allPersons.filter((person) =>
        person.name === newName
    )

    const personToAdd = {
      name: newName,
      number: newNumber
    }
    personService
      .create(personToAdd)
      .then(returnedPerson => {
        setAllPersons(allPersons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setMessage(
          `added ${newName}`
        )
      })
      .catch(error => {
        setMessage(
          `[ERROR] ${error.response.data.error}`
        )
        console.log(error.response.data)
      })

  const personToAdd = person[0]
  const updatedPerson = { ...personToAdd, number: newNumber }


  const deletePerson = (id) => {
    const filteredPerson = allPersons.filter(person => person.id === id)
    const personName = filteredPerson[0].name
    const personId = filteredPerson[0].id
    if (window.confirm(`Delete ${personName} ?`)) {
      personService
        .remove(personId)
      console.log(`${personName} successfully deleted`)
      setMessage(
        `${personName} was successfully deleted`
      )
      setAllPersons(allPersons.filter(person => person.id !== personId))
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  

  const resetPersonForm = () => {
    setNewName("");
    setNewNumber("");
  }


    return person;
  }
return (
  <div>
    <h2>Phonebook</h2>
    <Notification message={message} />
    <Filter value={newFilter} onChange={handleFilterChange} />
    <h2>Add new person</h2>
    <PersonForm onSubmit={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
    <h2>Numbers</h2>
    <Content persons={persons} allPersons={allPersons} deletePerson={deletePerson} />
  </div>
)
}
export default App

