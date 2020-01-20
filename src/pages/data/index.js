import PropTypes from "prop-types"
import React from "react"

import {index} from "lib/findObject"
import RichText from "components/RichText"
import Title from "components/Title"

import css from "./style.scss"

/**
  * @typedef {{
  *  className: *,
  *  match: {
  *    isExact: boolean
  *    path: string
  *    url: string
  *    params: object.<string, string>
  *  },
  * }} Props
  */

/**
  * @class
  * @extends {React.Component<Props>}
  */
export default class SurvivorPage extends React.Component {

  static propTypes = {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object),
    ]),
    match: PropTypes.exact({
      isExact: PropTypes.bool.isRequired,
      path: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      params: PropTypes.object,
    }).isRequired,
  }

  render() {
    const content = Object.entries(index).map(([key, info]) => {
      const richtextContent = `{${key}}`
      return <tr key={key}>
        <td>
          {info.type}
        </td>
        <td>
          {key}
        </td>
        <td>
          <RichText>{richtextContent}</RichText>
        </td>
      </tr>
    })
    return <main>
      <Title>Data</Title>
      <table className={css.table}>
        <tbody>
          {content}
        </tbody>
      </table>
    </main>
  }

}