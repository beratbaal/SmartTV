import React from 'react';
import VideoJS from "../Components/VideoJS"


export class VideoJSView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <VideoJS src={"https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8"}>

            </VideoJS>
        );
    }
}