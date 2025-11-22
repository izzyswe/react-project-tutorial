// Function receives props object as parameter (naming it "props" is convention)
// Attribute names you pass become properties: <Entry title="..." /> → props.title

//props
//1.title --> content title ex.) Mount Fuji
//2.img --> location image
//3.country --> ex.) Japan
//4.mapUrl --> google map url
//5.date --> ex.) 12 Jan 2021 - 24 Jan 2021
//6.description --> ex.) Mount Fuji is the tallest mountain in Japan.....

//function to return Entry component with props
export default function Entry(props){
    return(
        <div className="card">
            <div className="card__img">
                <img src={props.img} alt={props.titleImg} />
            </div>
            <div className="card__content">
                <div className="card__content-location">
                    <img src="../assets/location-icon.svg"/>
                    <p>{props.country}</p>
                    <a href={props.mapUrl}>View on Google Maps</a>
                </div>
                <div className="card__content-info">
                    <h1>{props.title}</h1>
                    <h2>{props.date}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}
