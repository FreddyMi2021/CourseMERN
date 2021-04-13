import React from 'react';
import './Styles/SignUp.css'
import axios from 'axios';
export default class SignUp extends React.Component{
    constructor(){
        super()
        this.state ={
            fullName: '',
            username: '',
            email: '',
            password: ''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    changeFullName(e){
        this.setState({
            fullName:e.target.value
        })
    }
    changeUsername(e){
        this.setState({
            username:e.target.value
        })
    }
    changeEmail(e){
        this.setState({
            email:e.target.value
        })
    }
    changePassword(e){
        this.setState({
            password:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault()

        const fields = {
            fullName: this.state.fullName,
            username: this.state.username,
            email: this.state.email,
            password:this.state.password
        }

        axios.post("http://localhost:4000/app/signup", fields)
        .then(res=>{
            console.log(res.data)
        })
        this.setState={
            fullName:'',
            username:'',
            email:'',
            password:''
        }
    }
    render(){
        return(
            <div className="signUpPage h-screen">
                <div className="w-full px-8 py-8">
                    <div className="md:flex flex-row">
                        <div className="hidden md:block w-full md:w-2/3">
                            <img className="transform translate-y-1/3" src="images/bg.png" alt="bg"/>
                        </div>
                        <div className="w-full bg-gray-100 rounded-md md:w-1/3 shadow-md p-4 transform translate-y-1/4 md:translate-y-1/3">
                            <div className="mb-12">
                                <h2 className="text-center mb-4 uppercase font-bold text-green-700 text-2xl">Inscription</h2>
                                <hr/>
                            </div>
                            <form action="" className="space-y-4"
                            onSubmit={this.onSubmit}
                            >
                                <input 
                                type="text"
                                placeholder="Fullname"
                                onChange={this.changeFullName}
                                value={this.state.fullName}
                                className="h-12 border-2 rounded-md px-2 border-gray-100 placeholder-opacity-50 w-full text-gray-500 font-semibold outline-none focus:outline-none"
                                />
                                <input 
                                type="text"
                                placeholder="Username"
                                onChange={this.changeUsername}
                                value={this.state.username}
                                className="h-12 border-2 rounded-md px-2 border-gray-100 placeholder-opacity-50 w-full text-gray-500 font-semibold outline-none focus:outline-none"
                                />
                                <input 
                                type="email"
                                placeholder="Email"
                                onChange={this.changeEmail}
                                value={this.state.email}
                                className="h-12 border-2 rounded-md px-2 border-gray-100 placeholder-opacity-50 w-full text-gray-500 font-semibold outline-none focus:outline-none"
                                />
                                <input 
                                type="password"
                                placeholder="Password"
                                onChange={this.changePassword}
                                value={this.state.password}
                                className="h-12 border-2 rounded-md px-2 border-gray-100 placeholder-opacity-50 w-full text-gray-500 font-semibold outline-none focus:outline-none"
                                />
                                <div className="text-center w-full mx-auto">
                                    <button
                                        className="btnSignup bg-green-600 w-auto xl:w-2/3 m-auto px-6 text-gray-50 active:bg-indigo-800 text-lg font-bold py-2 shadow hover:shadow-lg outline-none focus:outline-none"
                                        type="submit"
                                        style={{ transition: 'all .15s ease' }}
                                    >
                                        Create Account
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}