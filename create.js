import axios from "axios";

const createBook = async () => {
    const response = await axios.post('http://localhost:8080/books',{
        "name":"englishBook",
        "authorName": "mahesh",
        "price":{
            "currency": "inr",
            "amount": 2000
        }
    })
    console.log(`Create Book\n${response.status}\n`,response.data)
}

await createBook()