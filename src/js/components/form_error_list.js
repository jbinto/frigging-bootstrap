import React from 'react'

export default class FormErrorList extends React.Component {
  static displayName = 'FriggingBootstrap.Errors'

  static defaultProps = require('../default_props.js')

  static propTypes = {
    errors: React.PropTypes.array.isRequired,
  }

  render() {
    const { errors } = this.props
    return (
      <div>
        {
          errors.map((error) =>
            <div className="col-xs-12" key={`error-${error}`}>
              <div className="frigb-error" ref={`error-${error}`}>
                <div className="alert alert-danger">
                  <i className="fa fa-exclamation-circle" />
                  <span className="sr-only">Error:</span>
                  {` ${error}`}
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}
