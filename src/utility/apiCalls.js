import extraFunctions from './Extra_Functions';
import constant from './Constants';
const axios = require('axios');

class APICalls {
  constructor() {
    this.state = {serverURL: constant.API_URL};
    console.log('serverURL ' + this.state.serverURL);
  }

  _access_token = async () => {
    return await extraFunctions
      ._retriveData('access_token')
      .then(access_token => {
        return access_token;
      });
  };

  _username = async () => {
    return await extraFunctions._retriveData('username').then(username => {
      return username;
    });
  };

  _createUser(username, trainer_code, password, mailId, mobile, city) {
    return axios
      .post(`${this.state.serverURL}/user/`, {
        username: username,
        password: password,
        mobile: mobile,
        email: mailId,
        city: city,
      })
      .then(async response => {
        await extraFunctions._storeData(`access_token`, response.data);
        await extraFunctions._storeData(`username`, username);
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  _verifyLogin(username, password) {
    return axios
      .post(`${this.state.serverURL}/user/verifyUser`, {
        username: username,
        password: password,
      })
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async _getTrades() {
    return await axios
      .get(`${this.state.serverURL}/trades`, {
        params: {all: true, username: await this._username()},
        headers: {
          Authorization: `Bearer ${await this._access_token()}`,
        },
      })
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async _addTrades(whatTheyWant, WhatTheyGive, cp, city) {
    return axios
      .post(
        `${this.state.serverURL}/trades/`,
        {
          username: await this._username(),
          want: whatTheyWant,
          give: WhatTheyGive,
          cp: cp,
        },
        {
          headers: {
            Authorization: `Bearer ${await this._access_token()}`,
          },
        },
      )
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
  async _deleteTrade(_id) {
    return axios
      .delete(`${this.state.serverURL}/trades/`, {
        params: {_id: _id, username: await this._username()},
        headers: {
          Authorization: `Bearer ${await this._access_token()}`,
        },
      })
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async _getTrainerCode() {
    return axios
      .get(`${this.state.serverURL}/trainer`, {
        params: {username: `${await this._username()}`},
        headers: {
          Authorization: `Bearer ${await this._access_token()}`,
        },
      })
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async _addTrainerCode(username, trainerCode) {
    return axios
      .post(
        `${this.state.serverURL}/trainer`,
        {
          username: await this._username(),
          trainerCode: trainerCode,
        },
        {
          headers: {
            Authorization: `Bearer ${await this._access_token()}`,
          },
        },
      )
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  _deleteTrainerCode() {
    return axios
      .delete(`${this.state.serverURL}/trainer`, {
        username: req.body.username,
        trainerCode: req.body.trainerCode,
      })
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

const apiCalls = new APICalls();

export default apiCalls;
