import React from "react";
import { connect } from "react-redux";
import "./Directory.scss";
import MenuItem from "../menu-item/MenuItem";
import { selectDirectorySections } from "../../redux/directory/DirectorySelectors";
import { createStructuredSelector } from "reselect";
const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
