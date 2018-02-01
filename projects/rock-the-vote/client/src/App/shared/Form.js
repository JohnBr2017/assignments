import React, { Component } from 'react'
import axios from "axios"


class Form extends Component {
    constructor(props) {
        super(props);
        this.state ={
            data: {
                name: "",
                author: "",
                school: "",
                desc: "",
                review: ""
            }
        }
    };
    handleSubmit(e){
        
        axios.post('"http://localhost:8080/spellreview/"', {
            name: 'Fred',
            author: 'Fred',
            school: 'Fred',
            desc: 'Fred',
            review: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        // this.serverRequest = axios
        //     .post("http://localhost:8080/spellreview/", {
        //         name: this.ref.name,
        //         author: this.ref.author,
        //         school: this.ref.school,
        //         desc: this.ref.desc,
        //         review: this.ref.review
        //     })
        //     .then(function (response) {
        //         console.log(response);
        //     }).catch(function (error) {
        //         console.log(error);
        //     })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="name" type="text" placeholder="name" />
                <input name="author" type="text" placeholder="author" />
                <input name="school" type="text" placeholder="school" />
                <input name="desc" type="text" placeholder="description" />
                <input name="review" type="text" placeholder="review" />
                <button>Submit</button>
            </form>
        )
    }
}

export default (Form)

//     handleSubmit(e) {
//       e.preventDefault();
//       var self = this;
//       fetch('http://reqres.in/api/users', { 
//           method: 'POST',
//           data: {
//             name: self.refs.name,
//             job: self.refs.job
//           }
//         })
//         .then(function(response) {
//           return response.json()
//         }).then(function(body) {
//           console.log(body);
//         });
//     }
