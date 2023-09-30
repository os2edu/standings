import style from './index.module.scss'
import { Empty } from 'antd'

type Iprops = {
    src: string,
    setLoading: (loading: boolean) => void
}

const Iframe = (props: Iprops) => {
    return <>
        {props.src === '/' ?<div className={style['empty']}> <Empty description='暂无数据，敬请期待' /></div> : <iframe id="myIframe" className={style['iframe-container']} src={props.src} onLoad={() => {
            console.log('onload');
            props.setLoading(false)
        }} ></iframe>}
    </>
}

export default Iframe