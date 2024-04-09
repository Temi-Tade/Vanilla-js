// import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";
// const API_KEY = "AIzaSyCChmxrMMiTncdIOt2QpsRKYnzKvL1Bw4k";
// const genAI = new GoogleGenerativeAI(API_KEY);

// async function run() {
//     const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
//     const prompt = "what is JavaScript"
  
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = response.text();
//     document.body.innerHTML = text
// }

// run();

async function FETCH(){
  try {
    let res = await fetch("http://127.0.0.1:5500/data.jsn")
    if (res.status === 200) {
      Promise.resolve(res)
      .then(data => data.json())
      .then(x => console.log(x))
    } else {
      throw {title: "Error", message: "An error occured"}
    }
  } catch (error) {
    console.log(error.title)
  }
}

FETCH()