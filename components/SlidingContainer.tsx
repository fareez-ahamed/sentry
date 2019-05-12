import * as React from 'react'
import SlidingContainerService from '../client/services/SlidingContainerService';

interface State {
  visible: boolean
}

class SlidingContainer extends React.Component {

  public state: State

  constructor(props) {
    super(props)
    this.state = { visible: false }
  }

  public componentDidMount() {
    SlidingContainerService.subscribe((open) => {
      this.setState({visible: open})
    })
  }

  public render() {
    return (
      <div style={{
        position: 'fixed',
        paddingTop: 80,
        right: 0,
        top: 0,
        bottom: 0,
        width: 600,
        backgroundColor: '#fff',
        borderLeft: 'solid 1px #ccc',
        display: this.state.visible ? 'block' : 'none',
      }}>
      </div>
    )
  }
}

export default SlidingContainer
