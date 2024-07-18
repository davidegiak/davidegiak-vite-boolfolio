import axios from "axios";

let projects =  axios.get('http://127.0.0.1:8000/api/projects').then(response => {
    console.log(response);
    this.projects = response.data.projects
  });

  export default (projects);