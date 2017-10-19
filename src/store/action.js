import axios from 'axios'
import Zapya from '../assets/js/zapya-methods.js'

export default {
  getUserId ({commit}, uid = '267433') {
    if (typeof window['_myJSface'] !== 'undefined' && window['_myJSface'] !== null) {
      let trueUID = Zapya.getUserId()
      commit('GET_USER_ID', {uid: trueUID})
    }
    commit('GET_USER_ID', {uid})
  },
  getUserToken ({commit}, ut = '1a59ce08bb410d575e94e25cc7f98a97') {
    if (typeof window['_myJSface'] !== 'undefined' && window['_myJSface'] !== null) {
      let trueUt = Zapya.getToken()
      commit('GET_USER_TOKEN', {ut: trueUt})
    }
    commit('GET_USER_TOKEN', {ut})
  },
  getShareMovie ({commit, state}, res) {
    axios.get('http://210.73.213.236:9392/zapya/room/recommends?uid=6589019,14744578,22009392,22036705,14744247,14744659,5678,22006379,14744592,26284747')
      .then((res) => {
        //add key uid to response
        let movieArr = []
        res.data.map((val) => {
          val.files[0].id=val._id
          val.files[1].id=val._id
          movieArr = movieArr.concat(val.files)
        })
        // console.log('movieArr', movieArr)
        commit('GET_SHARE_MOVIE', {res: movieArr})
      })
  },
  getMovieItem ({commit, state}, res) {
    axios.get('http://210.73.213.236:9392/proxy/jsonGET?url=http%3a%2f%2fapi.dewmobile.net%2fv3%2fcenter%2fdaily%2fs&ut=' + state.ut)
      .then((res) => {
        //add key uid to response
        commit('GET_MOVIE_ITEM', {res: res})
      })
      .catch((err) => {
        alert('sorry,please refresh this website')
      })
  },
  search ({commit, state}, res) {
      axios.get('http://210.73.213.236:9392/proxy/jsonGET?url=http%3a%2f%2fapi.dewmobile.net%2fes%2fshockings%3fname%3d' + encodeURI(state.searchContext) + '%26cat%3d3&ut=' + state.ut)
        .then((res) => {
          //add key uid to response
          commit('SEARCH_MOVIE', {res: res})
        })
        .catch((err) => {
          alert('sorry,please refresh this website')
        })
  },
  redirectToRoom ({commit, state}, res) {
  },
  getPeopleNum ({commit, state}, res) {
    axios.get('http://api.dewmobile.net/v3/')

  }
}
