import '../App.css'

function StoreItem({item}) {


  return (
    <>
      <div className="card bg-base-100 shadow-sm">
        <figure>
            <img src="https://picsum.photos/600/800/" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">Test Product Item</h2>
            <p>Item description</p>
        </div>
      </div>
    </>
  )
}

export default StoreItem