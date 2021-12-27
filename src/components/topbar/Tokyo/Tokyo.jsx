import React from 'react'
import "./tokyo.scss";
import Map from '../map/Map';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';

export default function Tokyo({ locations, setLocations, clickedTourism, setClickedTourism, getLocations }) {
    const { path, url } = useRouteMatch();
    console.log(url);

    async function getTourismData() {
        const locations = await fetch("/api/tourism");
        const jsonLocation = await locations.json();
        // setClickedTourism(true);
        await getLocations(jsonLocation);
        await setLocations(jsonLocation);
        // console.log(jsonLocation);
    }

    async function getHistoryData() {
        const locations = await fetch("/api/history");
        const jsonLocation = await locations.json();

        await getLocations(jsonLocation);
        await setLocations(jsonLocation);

    }

    async function getShoppingData() {
        const locations = await fetch("/api/shopping");
        const jsonLocation = await locations.json();

        await getLocations(jsonLocation);
        await setLocations(jsonLocation);
    }

    async function getSportData() {
        const locations = await fetch("/api/sport");
        const jsonLocation = await locations.json();

        await getLocations(jsonLocation);
        await setLocations(jsonLocation);
    }

    return (
        <Router>
            <div className="tokyo" id="tokyo">
                <Switch>
                    <Route exact path={`${path}`}>
                        <div className="top">
                            <div className="item" onClick={() => getHistoryData()}>
                                <img src="https://c4.wallpaperflare.com/wallpaper/1018/359/645/tokyo-imperial-palace-wallpaper-preview.jpg" alt="..." />
                                {/* <h3>History</h3> */}
                                <Link to={`${url}/history`}>History</Link>
                            </div>
                            <div className="item" onClick={() => getTourismData()}>
                                <img src="https://images.unsplash.com/photo-1547981609-ad4e1dde4d41?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpYnV5YSUyMGNyb3NzaW5nJTJDJTIwc2hpYnV5YSUyQyUyMGphcGFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="..." />
                                {/* <h3>Tourism</h3> */}
                                <Link to={`${url}/tourism`}>Tourism</Link>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="item" onClick={() => getShoppingData()}>
                                <img src="https://www.japan-guide.com/g18/5213_01.jpg" alt="..." />
                                {/* <h3>Shopping</h3> */}
                                <Link to={`${url}/shopping`}>Shopping</Link>
                            </div>
                            <div className="item" onClick={() => getSportData()}>
                                <img src="https://e0.365dm.com/19/11/2048x1152/skysports-tokyo-olympics-new-national-stadium_4840471.jpg" alt="..." />
                                {/* <h3>Sport</h3> */}
                                <Link to={`${url}/sport`}>Sport</Link>
                            </div>
                        </div>
                    </Route>
                    <Route path={`${path}/history`}>
                        <Map locations={locations}></Map>
                    </Route>
                    <Route path={`${path}/tourism`}>
                        <Map locations={locations}></Map>
                    </Route>
                    <Route path={`${path}/shopping`}>
                        <Map locations={locations}></Map>
                    </Route>
                    <Route path={`${path}/sport`}>
                        <Map locations={locations}></Map>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
