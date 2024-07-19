import { Link } from 'react-router-dom'

const CrazyDeals = () => {
  return (
    <div className="crazyDeals">
          <h1>CRAZY DEALS</h1>
          <div className="deals">
            <div className="buy6">
              <Link to="">
                <img
                  src="https://bellavitaorganic.com/cdn/shop/files/678-548.jpg?v=1697537263&width=400"
                  alt="buy6"
                />
              </Link>

              <Link to="">
                <h4>SELF LOVE KIT</h4>
              </Link>
            </div>
            <div className="buy3">
              <Link to="">
                {" "}
                <img
                  src="https://bellavitaorganic.com/cdn/shop/files/678-548_6b103ba3-70fa-49ed-a096-6766df439494.jpg?v=1712237090&width=400"
                  alt="buy6"
                />
              </Link>

              <Link to="">
                <h4>HELLO SUMMER COMBO</h4>
              </Link>
            </div>
            <div className="buy2">
              <Link to="">
                <img
                  src="https://bellavitaorganic.com/cdn/shop/files/678-548_1.jpg?v=1701774461&width=400"
                  alt="buy6"
                />
              </Link>

              <Link to="">
                <h4>BADE MIYA CHHOTE MIYA</h4>
              </Link>
            </div>
          </div>
        </div>
  )
}

export default CrazyDeals
