import React from 'react';

 
class KontaktF extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }
 
    resetForm() {
        this.setState({ name: '', email: '', message: '' })
    }
 
    render() {
        return (
            <div className="App">
                <form id="contact-form" >
                    <div className="form-group">
                        <label htmlFor="name">Ime i prezime</label>
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Poruka</label>
                        <textarea className="form-control" rows="2" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <div className="form-group">
                    <button type="submit" className="btn btn-success" onClick={() => alert('Poruka je uspesno poslata. Ime: ' +this.state.name + '. Email: ' + this.state.email + ', poruka: '+ this.state.message )}> Posaljite poruku </button>
                    </div>
                </form>
            
            </div>
        );
    }
 
    onNameChange(event) {
        this.setState({ name: event.target.value })
    }
 
    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }
 
    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }
}
 
export default KontaktF;