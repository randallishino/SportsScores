import React, { Component } from "react";
import "./MLB.css";
import axios from "axios"


const apiKey = "fc43a60e-d321-498f-9331-9ce7c8"
const headers = {
    headers: {
        "Authorization": "Basic " + btoa("fc43a60e-d321-498f-9331-9ce7c8" + ":" + "MYSPORTSFEEDS")
    }
}


class MLB extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: "",
      homeTeam: "",
      awayTeam: "",
      data: [{}]
    };
  }


componentDidMount() {

//     fetch('https://api.mysportsfeeds.com/v2.0/pull/mlb/2018-regular/date/20180801/games.json', headers)
//     .then((resp) => resp.json()) // Transform the data into json
//     .then(function(data) {
//         console.log(data);
//       // Create and append the li's to the ul
//       })
// }

    axios({ 
        url: 'https://api.mysportsfeeds.com/v2.0/pull/mlb/current/date/20180802/games.json',
        method:'GET',
        headers : {
            "Authorization": "Basic " + btoa("fc43a60e-d321-498f-9331-9ce7c8" + ":" + "MYSPORTSFEEDS")
        }
    })
    .then((response) => {
        this.setState({
           data: response.data.games
    })
})
    .catch(function(error) {
        console.log(error)
    })
}



  render() {
    return (
          <div className="">
           <div>
        {this.state.data != '' ?
            <pre>
              <ul>
                <li>{this.state.data}</li>
                <li>{this.state.data}</li>
              </ul>
            </pre>
            :
            null
        }
        </div>
      <div className="sport mb3">
              <h2 className="f4 fw8 mv0 bg-gold ph2 pv1 lh-solid">MLB</h2>
              <div className="scores flex flex-wrap nl3 nr3">
                  {/* <dl class="w-50 w-25-l ph3 mb2">
                      <dt class="f7 fw8">BOTTOM 4 INNING</dt>
                      <dd class="ml0 f5">Baltimore 9</dd>
                      <dd class="ml0 f5">Chi. Sox 0</dd>
                  </dl> */}
                  {/* <dl class="w-50 w-25-l ph3 mb2">
                      <dt class="f7 fw8">FINAL</dt>
                      <dd class="ml0 f5">Pittsburgh 4</dd>
                      <dd class="ml0 f5">Cincinnati 5</dd>
                  </dl>
                  <dl class="w-50 w-25-l ph3 mb2">
                      <dt class="f7 fw8">FINAL</dt>
                      <dd class="ml0 f5">LA Angels 8</dd>
                      <dd class="ml0 f5">Toronto 1</dd>
                  </dl> */}
                  <dl className="w-50 w-25-l ph3 mb2">
                      {/* <dt className="f7 fw8">{JSON.stringify(this.state.data[0].schedule)}</dt> */}
                      <dd className="ml0 f5">LA DODGERS -</dd>
                      <dd className="ml0 f5">MILWALKEE BREWERS -</dd>
                  </dl>
              </div>
          </div>
            </div>
    )
  }
}

export default MLB;
