import { IonContent, IonHeader, IonPage, IonSearchbar } from "@ionic/react"
import { useState } from "react";
import Header from "../../common/layout/headers/headers";
import './Dashboard.scss';
import Movie from "../../common/components/Movie";
import { IMovie } from "../../utilities/interfaces/IMovie";
import { NewMoviesData1 } from "../../utilities/constants/NewMoviesData1";

const Dashboard: React.FC = () => {

    const [search, setSearch] = useState('');
    const [moviesData, setMoviesData] = useState(NewMoviesData1);

    const setSearchResult = (e: any) => {
        setSearch(e.detail.value!);
        e.detail.value! ? setMoviesData(prev => prev.filter((val) => val.title.toLowerCase().includes(e.detail.value!))) : setMoviesData(NewMoviesData1);
    }

    return (
        <IonPage>
            <IonHeader>
                <Header />
            </IonHeader>
            <IonContent>
                <IonSearchbar value={search} onIonChange={setSearchResult} className="searchBar" />
                {//@ts-ignore
                }{moviesData.map((movie: IMovie, index) => <div className="movieContainer"><Movie movie={movie} key={index} /></div>)}
            </IonContent>
        </IonPage>
    )
}

export default Dashboard;