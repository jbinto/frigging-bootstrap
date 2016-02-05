var React = require("react")

export default class Errors extends React.Component {
  displayName = "FriggingBootstrap.Errors"

  static defaultProps = require("../default_props.js")

  render() {
    return (
      <div>
        {
          this.props.errors.map((error) => {
            return (
              <div className="col-xs-12" key={`error-${error}`}>
                <div className="frigb-error" ref={`error-${error}`}>
                  <div className="alert alert-danger">
                    <i className="fa fa-exclamation-circle"/>
                    <span className="sr-only">Error:</span>
                    {` ${error}`}
                    <div className="clearfix"/>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

}
