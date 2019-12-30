import classnames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import {Link} from "react-router-dom"

import findObject from "lib/findObject"
import findPatchesForReference from "lib/findPatchesForReference"
import PatchCategory from "components/PatchCategory"
import PatchHeadline from "components/PatchHeadline"
import PatchLines from "components/PatchLines"
import TextSection from "components/TextSection"

import css from "./style.scss"

/**
  * @typedef {{
  *   className: *,
  *   referenceId: string,
  * }} Props
  */

/**
  * @class
  * @extends {React.Component<Props>}
  */
export default class RelevantPatches extends React.Component {

  static propTypes = {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object),
    ]),
    referenceId: PropTypes.string.isRequired,
  }

  render() {
    const object = findObject(this.props.referenceId)
    const patches = findPatchesForReference(object.id)
    const content = Object.values(patches).map(patch => {
      const headline = <PatchHeadline patchInfo={patch}/>
      const changes = Object.keys(patch.points).map(category => {
        return <div key={category} className={css.categoryBlock}>
          <PatchCategory category={category} className={css.patchCategory}/>
          <PatchLines points={patch.points[category]} showReferences/>
        </div>
      })
      return <div key={patch.semver} className={css.patchBlock}>
        {headline}
        {changes}
        <TextSection>
          <Link to={`/patch/${patch.linkId}`}>View full patch {patch.semver}</Link>
        </TextSection>
      </div>
    })
    return <div className={classnames(css.container, this.props.className)}>
      {content}
    </div>
  }

}