// import 'bootstrap/dist/css/bootstrap.min.css';
import './_mos-ru.scss';
import React from "react";


export default class MosRuBlock extends React.Component {

    render() {
        return (
            <>
                <div className="tizer-block container-fluid">
                    <div className="tizer-block__row">
                        <div className="tizer-block__col">
                            <div className="tizer-block__banner"
                                 data-mos-teaser='{ "scroll":false,"adaptive":null,"placementParams":{ "p1":"bxdrg","p2":"fpkh"}}'></div>
                            <div className="tizer-block__banner"
                                 data-mos-teaser='{ "scroll":false,"adaptive":null,"placementParams":{ "p1":"bxdrh","p2":"fpkh"}}'></div>
                            <div className="tizer-block__banner"
                                 data-mos-teaser='{ "scroll":false,"adaptive":null,"placementParams":{ "p1":"bxdri","p2":"fpkh"}}'></div>
                            <div className="tizer-block__banner"
                                 data-mos-teaser='{ "scroll":false,"adaptive":["phone","desktop"],"adaptiveOptions":{ "tabletWidth":1200,"phoneWidth":810},"placementParams":{ "p1":"bxdrj","p2":"fpkh"}}'></div>
                        </div>
                    </div>
                </div>
                {/*<div className="tizer-block container-fluid" style={{ width: "100%", height: "365px"}}>*/}
                {/*    <div className="row tizer-block__row" style={{ width: "100%", height: "100%"}}>*/}
                {/*        <div className="col tizer-block__col" style={{ width: "100%", height: "100%", display: "flex"}}>*/}
                {/*            <div className="tizer-block__banner" style={{ width: "25%", height: "100%"}}*/}
                {/*                 data-mos-teaser='{ "scroll":false,"adaptive":null,"placementParams":{ "p1":"bxdrg","p2":"fpkh"}}'></div>*/}
                {/*            <div className="tizer-block__banner" style={{ width: "25%", height: "100%"}}*/}
                {/*                 data-mos-teaser='{ "scroll":false,"adaptive":null,"placementParams":{ "p1":"bxdrh","p2":"fpkh"}}'></div>*/}
                {/*            <div className="tizer-block__banner" style={{ width: "25%", height: "100%"}}*/}
                {/*                 data-mos-teaser='{ "scroll":false,"adaptive":null,"placementParams":{ "p1":"bxdri","p2":"fpkh"}}'></div>*/}
                {/*            <div className="tizer-block__banner" style={{ width: "25%", height: "100%"}}*/}
                {/*                 data-mos-teaser='{ "scroll":false,"adaptive":["phone","desktop"],"adaptiveOptions":{ "tabletWidth":1200,"phoneWidth":810},"placementParams":{ "p1":"bxdrj","p2":"fpkh"}}'></div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>*/}
                {/*<script src="js/bootstrap.min.js"></script>*/}
                <script src="https://www.mos.ru/otrasli-static/outer/mosTizer.js"></script>
            </>
        )
    }
}
