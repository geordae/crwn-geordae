import React from "react";
import "./Collection.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/ShopSelectors";
import PreviewCollectionItem from "../../components/preview-collection-item/PreviewCollectionItem";

const Collection = ({ collection }) => {
  const { title, items } = collection;

  console.log(collection);

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <PreviewCollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
