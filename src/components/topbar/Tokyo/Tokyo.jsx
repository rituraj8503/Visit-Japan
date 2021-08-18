import React from 'react'
import "./tokyo.scss";

export default function Tokyo({clickedTourism, setClickedTourism, getLocations}) {
    async function getTourismData() {
        const locations = await fetch("/api/tourism");
        const jsonLocation = await locations.json();
        setClickedTourism(true);
        await getLocations(jsonLocation);
        // console.log(jsonLocation);
    }
    return (
        <div className="tokyo" id="tokyo">
            <div className="top">
                <div className="item">
                    <img src="https://c4.wallpaperflare.com/wallpaper/1018/359/645/tokyo-imperial-palace-wallpaper-preview.jpg" alt="..."/>
                    <h3>History</h3>
                </div>
                <div className="item" onClick={() => getTourismData()}>
                    <img src="https://images.unsplash.com/photo-1547981609-ad4e1dde4d41?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpYnV5YSUyMGNyb3NzaW5nJTJDJTIwc2hpYnV5YSUyQyUyMGphcGFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="..."/>
                    <h3>Tourism</h3>
                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <img src="https://www.japan-guide.com/g18/5213_01.jpg" alt="..."/>
                    <h3>Shopping</h3>
                </div>
                <div className="item">
                    <img src="https://gtimg.tokyo2020.org/image/private/t_article-image-desktop/production/u4vszytlwxuspn7jnrwp" alt="..."/>
                    <h3>Sport</h3>
                </div>
            </div>
        </div>
    )
}
