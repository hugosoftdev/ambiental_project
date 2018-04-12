import React, { Component } from 'react';
import { FormControl, Button, Modal, Grid, Row } from 'react-bootstrap';
import './App.css';
import './animated_button.css';
import Reports from './Reports';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHomePage: true,
    };
    this.changeShowHomePage = this.changeShowHomePage.bind(this);
  }

  changeShowHomePage() {
    this.setState({showHomePage: !this.state.showHomePage});
  }


  render() {
    return <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous" />
        <div>
          <Grid fluid>
            {
              this.state.showHomePage ?
              <Row>
              <div className="home-background" />
              <div className="background-body">
                <div className="home-brand">
                  <div>
                    <span className="principal-title"> GreenData </span>
                  </div>
                  <span className="subtitle">
                    {" "}
                    Energetic control in your hands{" "}
                  </span>
                  <div className='flex-row-center'>
                    <Button  onClick={this.changeShowHomePage} className='button-home' bsStyle='success'> GET STARTED </Button>
                  </div>
                </div>
              </div>
            </Row>
            :
            <Reports/>
            }

          </Grid>
        </div>
      </div>;
  }
}

export default App;
