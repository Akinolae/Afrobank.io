import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: '' }
  }

  static getDerivedStateFromError = (error) => {
    return { error: error, hasError: true }
  }

  componentDidCatch = (error, info) => {
    this.logErrorToExampleService(error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>{this.state.error}</p>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
