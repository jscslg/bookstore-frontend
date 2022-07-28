import axios from "axios";

const deleteBook = async () => {
    const response = await axios.delete('http://localhost:8080/books/1')
    console.log(`Delete Book\n${response.status}`)
}

await deleteBook()