import '../App.css'
import { StoreItemType } from '@pos-dashboard/shared';

interface StoreItemProp {
    item: StoreItemType;
}

function StoreItem({item}: StoreItemProp) {

  return (
    <>
      <div className="card bg-base-100 m-2 shadow-sm">
        <figure>
            <img src={item.imageURL} />
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