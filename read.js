import axios from "axios";

const getAllBooks = async () => {
    const response = await axios.get('http://localhost:8080/books')
    console.log(`Get All Books\n${response.status}\n`,response.data)
}

await getAllBooks()