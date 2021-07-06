import React, { Component } from 'react'
import classes from './QuizList.module.css'
import { NavLink } from 'react-router-dom'
import Loader from '../../components/UI/Loader/Loader'
// import axios from '../../axios/axios-quiz'
import { connect } from 'react-redux'
import { fetchQuizes } from '../../store/actions/quiz'

class QuizList extends Component {

  // state = {
  //   quizes: [],
  //   loading: true
  // }

  // renderQuizes() {
  //   return [1, 2, 3].map((quiz, index) => {
  //     return (
  //         <li
  //           key={index}
  //         >
  //           <NavLink to={'/quiz/' + quiz}>
  //             Тест {quiz}
  //           </NavLink>
  //         </li>
  //     )
  //   })
  // }

  // renderQuizes() {
  //   return this.state.quizes.map((quiz) => {
  //     return (
  //         <li
  //             key={quiz.id}
  //         >
  //           <NavLink to={'/quiz/' + quiz.id}>
  //             {quiz.name}
  //           </NavLink>
  //         </li>
  //     )
  //   })
  // }

  renderQuizes() {
    return this.props.quizes.map((quiz) => {
      return (
          <li
              key={quiz.id}
          >
            <NavLink to={'/quiz/' + quiz.id}>
              {quiz.name}
            </NavLink>
          </li>
      )
    })
  }

  // componentDidMount() {
  //   axios.get('https://react-js-quiz-app-default-rtdb.europe-west1.firebasedatabase.app/quiz.json').then(response => {
  //     console.log(response)
  //   })
  // }

  // async componentDidMount() {
  //   try {
  //     const response = await axios.get('/quizes.json')
  //
  //     // console.log(response.data)
  //
  //     const quizes = []
  //
  //     Object.keys(response.data).forEach((key, index) => {
  //       quizes.push({
  //         id: key,
  //         name: `Тест №${index + 1}`
  //       })
  //     })
  //
  //     this.setState({
  //       quizes, loading: false
  //     })
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  componentDidMount() {
    this.props.fetchQuizes()
  }

  // render() {
  //   return (
  //       <div className={classes.QuizList}>
  //         <div>
  //           <h1>Список тестов</h1>
  //
  //           {
  //             this.state.loading
  //               ? <Loader/>
  //               : <ul>
  //                   { this.renderQuizes() }
  //                 </ul>
  //           }
  //         </div>
  //       </div>
  //   )
  // }

  render() {
    return (
        <div className={classes.QuizList}>
          <div>
            <h1>Список тестов</h1>

            {
              this.props.loading && this.props.quizes.length !== 0
                  ? <Loader/>
                  : <ul>
                    { this.renderQuizes() }
                  </ul>
            }
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    quizes: state.quiz.quizes,
    loading: state.quiz.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizes: () => dispatch(fetchQuizes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)