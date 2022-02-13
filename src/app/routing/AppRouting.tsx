import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import { useAuth0 } from "@auth0/auth0-react";
import { PrivateRouteProps } from '../utilities/interfaces/IPrivateRoute';
import Dashboard from '../pages/Dashboard';
import Slides from '../pages/Slides';
import Plans from '../pages/Plans';

const AppRouting: React.FC = () => {

    const { isAuthenticated } = useAuth0();

    const PrivateRoute: React.FC<PrivateRouteProps> = (props: PrivateRouteProps) => {
        const { component: Component, ...rest } = props;
        return (
            <Route
                {...rest}
                render={prop =>
                    isAuthenticated ?
                        <Component {...prop} />
                        :
                        <Redirect
                            to={{
                                pathname: "/home"
                            }}
                        />
                }
            />
        );
    }

    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <Switch>
                    <Route path="/home" exact component={Home} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <PrivateRoute path="/slides" component={Slides} />
                    <Redirect from="*" to="/home" />
                </Switch>
            </IonRouterOutlet>
        </IonReactRouter>
    );
}

export default AppRouting;