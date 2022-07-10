import { Component, ErrorInfo } from 'react'

type StateType = {
  color: string
  error: boolean
}

export default class Lifecycle extends Component<any, StateType> {
  constructor(props) {
    super(props)
    this.state = {
      color: 'tomato',
      error: false
    }
    console.log('constructor')
  }

  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps')
    return {}
  }

  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<StateType>,
    nextContext: any
  ): boolean {
    console.log('shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<StateType>
  ): any {
    console.log('getSnapshotBeforeUpdate')
    return {}
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<StateType>,
    snapshot?: any
  ) {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  static getDerivedStateFromError() {
    console.log('getDerivedStateFromError')
    return {
      error: true
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('componentDidCatch')
    this.setState({
      color: 'tomato',
      error: true
    })
  }

  render() {
    console.log('render')
    return (
      <div>
        <button onClick={() => this.setState({ color: 'red' })}>
          setState
        </button>
      </div>
    )
  }
}
