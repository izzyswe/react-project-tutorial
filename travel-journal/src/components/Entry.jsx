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
        <div className="entry-container">
            <div className="entry-img-container">
                <img src={props.img} alt={props.title} />
            </div>
            <div className="entry-description-container">
                <div className="location-container">
                    <img src="../assets/location-icon.svg"/>
                    <p>{props.country}</p>
                    <a href={props.mapUrl}>View on Google Maps</a>
                </div>
                <div className="entry-info-container">
                    <h1>{props.title}</h1>
                    <h2>{props.date}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}