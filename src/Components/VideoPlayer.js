import { useState } from 'react';
import ReactPlayer from 'react-player/vimeo';
import Credits from './Credits';

const VideoPlayer = ({ src, production_company, directed_by, creative_direction }) => {
    const [ratio, setRatio] = useState(16 / 9);

    const handleReady = (player) => {
        const vimeo = player.getInternalPlayer();
        Promise.all([vimeo.getVideoWidth(), vimeo.getVideoHeight()])
            .then(([w, h]) => {
                if (w && h) setRatio(w / h);
            })
            .catch(() => {});
    }

    return (
        <div className="main-project-viewer-container">
            <div
                className="main-project-viewer-block"
                style={{
                    aspectRatio: ratio,
                    width: `min(80%, calc(95dvh * ${ratio}))`
                }}
            >
                <ReactPlayer
                    url={src}
                    width={"100%"}
                    height={"100%"}
                    controls={true}
                    onReady={handleReady}
                    config={{
                        vimeo: {
                            playerOptions: {
                                autoplay: true,
                                playsinline: true
                            }
                        }
                    }}
                />
                <Credits production_company={production_company} directed_by={directed_by} creative_direction={creative_direction} />
            </div>
        </div>

    )
}

export default VideoPlayer;
