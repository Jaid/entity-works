import classnames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import {reduxForm} from "redux-form"

import TextInput from "components/TextInput"

import css from "./style.scss"

/**
  * @typedef {{
  *   className: *,
  *   FormComponent: *,
  * }} Props
  */

@reduxForm({
  form: "build",
})

/**
  * @class
  * @extends {React.Component<Props>}
  */
export default class extends React.Component {

  static propTypes = {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object),
    ]),
    FormComponent: PropTypes.object.isRequired,
    change: PropTypes.func.isRequired,
  }

  render() {
    console.log(this.props)
    return <div className={classnames(css.container, this.props.className)}>
      <form>
        <div>Title</div>
        <TextInput className={css.titleInput}/>
        <this.props.FormComponent change={this.props.change}/>
      </form>
    </div>
  }

}