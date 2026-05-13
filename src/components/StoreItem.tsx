import '../App.css'
import { StoreItemType } from '@pos-dashboard/shared';

interface StoreItemProp {
    item: StoreItemType;
    storeItemOnClick: () => void;
}

function StoreItem({item, storeItemOnClick}: StoreItemProp) {

  return (
    <>
      <div className="card bg-base-100 shadow-sm cursor-pointer" onClick={storeItemOnClick}>
        <figure>
            <img src={item.imageURL} loading="lazy" alt={item.name} />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.description}</p>
        </div>
      </div>
    </>
  )
}

export default StoreItem