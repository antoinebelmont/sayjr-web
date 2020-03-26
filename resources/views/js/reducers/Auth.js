const defaultUserInfo = {
  name: 'Demo User',
  image: 'http://demos.creative-tim.com/light-bootstrap-dashboard-pro/assets/img/default-avatar.png',
  token:null
};

export default function reducer(state = {
  user: defaultUserInfo
}, action) {
  return state;
}

export function getToken(){
  return {
    type: 'GET_TOKEN',
    payload: {
        token: defaultUserInfo.token
    }
  }
}