import { useEffect, useState } from "react";
import { Links, LinksKey } from "../common/constants";
import Iframe from "../components/Iframe";
import { Spin } from "antd";
import RankPage from "./rank";

export default function RankIframe() {
    const [loading, setLoading] = useState<boolean>(true)
    const key = location.pathname.split('/')[2] as LinksKey
    useEffect(() => {
        setLoading(true)
    }, [location.pathname])
    return <div >
        <Spin spinning={loading}>
            {key === 'link2' ?
                <RankPage /> :
                <Iframe src={`${Links[key].url}`} setLoading={setLoading}></Iframe>
            }
        </Spin>
    </div>

}