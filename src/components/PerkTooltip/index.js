import classnames from "classnames"
import PropTypes from "prop-types"
import React from "react"

import findObject from "lib/findObject"
import PerkImage from "components/PerkImage"
import RichText from "components/RichText"

import css from "./style.scss"

/**
  * @typedef {{
  *   className: *,
  *   perkId: string
  * }} Props
  */

/**
  * @class
  * @extends {React.Component<Props>}
  */
export default class PerkTooltip extends React.Component {

  static propTypes = {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object),
    ]),
    perkId: PropTypes.string.isRequired,
  }

  render() {
    const perk = findObject(this.props.perkId)
    console.log(perk)
    return <div className={classnames(css.container, this.props.className)}>
      <div className={css.banner}>
        <PerkImage className={css.icon} perkId={perk.id}/>
        <div className={css.perkInfo}>
          {perk.title}
        </div>
      </div>
      <div className={css.effect}>
        <RichText>{perk.effect.replace("{this}", perk.title)}</RichText>
      </div>
    </div>
  }

}