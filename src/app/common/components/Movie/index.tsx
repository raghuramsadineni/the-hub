import { IonCard, IonIcon, IonImg, IonText } from "@ionic/react";
import { IMovie } from "../../../utilities/interfaces/IMovie";
import './Movie.scss';

import { playCircle, playCircleSharp } from "ionicons/icons"

const Movie: React.FC<IMovie> = (props) => {
    return (
        <IonCard className="movieCardContainer" onClick={() => window.open(props.movie.streamingAvailability, '_blank')}>
            <IonImg src={props.movie.imageurl} className="movieCardImage" />
            <IonIcon md={playCircle} ios={playCircleSharp} className="movieDetailsPlayIcon" />
            <div className="movieDetailsContainer">
                <IonText className="movieDetailsTitleText"><h4>{props.movie.title}</h4></IonText>
                <IonText className="movieDetailsTitleText"><h5>{props.movie.runtime}</h5></IonText>
            </div>
        </IonCard>
    );
}

export default Movie;