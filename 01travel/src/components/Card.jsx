
export default function Card(props) {
    return (
        <div className="card">
            <img className="image" src={`/images/${props.img}`} alt="something" />
            <div className="content">
            <div className="location">
                <img className="star" src={`/images/${props.star}`} alt="location"  />
                <h4>{props.country}</h4>
                <a target="blank" href={props.map}>View on google Map</a>
            </div>
            <h1 className="visit">{props.location}</h1>
            <h4 className="date">{props.date1} 2021 - {props.date2} 2021</h4>
            <p className="dec">{props.descrip}</p>
            </div>
        </div>
    )
}