import axios from "axios";

const updateBook = async () => {
    const response = await axios.put('http://localhost:8080/books/1',{
        "name":"english",
        "authorName": "mahesh",
        "price":{
            "currency": "inr",
            "amount": 2000
        }
    })
    console.log(`Update Book\n${response.status}\n`,response.data)
}

await updateBook()