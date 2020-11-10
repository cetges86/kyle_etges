import React from "react";

const Player = () => {
    return (
        <div>
            <div className="container">
            <iframe id="bc-player" title="bandcamp embedded album" src="https://bandcamp.com/EmbeddedPlayer/album=1091318590/size=large/bgcol=333333/linkcol=e99708/artwork=small/transparent=true/" seamless><a href="https://etges.bandcamp.com/album/vow">Vow by Kyle Etges</a></iframe>
                {/* <iframe id="bc-player" title="bandcamp embedded album" src="https://bandcamp.com/EmbeddedPlayer/album=1101863184/size=large/bgcol=333333/linkcol=e99708/artwork=small/transparent=true/" seamless><a href="http://etges.bandcamp.com/album/vow">Jazz Might Happen by Kyle Etges</a></iframe>             */}
                </div>
        </div>
    )
}

export default Player;