import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Nav from './nav'
import { Layout as AntdLayout, Breadcrumb, Menu, MenuProps } from 'antd'
import { HomeOutlined, LineChartOutlined, RocketOutlined } from '@ant-design/icons'
import { Links, LinksKey, getFormatLinks } from '../common/constants'

const Layout = dynamic(
  () => import('@os2edu/layout'),
  { ssr: false }
)

const { Sider, Content } = AntdLayout

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '24px 50px',
  color: 'rgba(0,0,0,.85)',
  fontSize: 14,
  backgroundColor: 'white',
}

const yearItem = getFormatLinks();

let yearMenus = []

for (const key in yearItem) {
  if (Object.prototype.hasOwnProperty.call(yearItem, key)) {
    const element = yearItem[key];
    yearMenus.push({
      key: `/${key}`,
      label: `${key}训练营`,
      icon: <LineChartOutlined />,
      children: element.map((item, index) => {
        return {
          key: item.key,
          label: item.label,
          icon: <RocketOutlined />,
        }
      })
    })
  }
}

const menuItems: MenuProps['items'] = [
  {
    key: '/',
    label: '首页',
    icon: <HomeOutlined />,
  },
  ...yearMenus
]

export default function DefaultLayout({ children }: { children: React.ReactNode }) {

  const [currLink, setCurrLink] = useState<LinksKey | '/'>('/')
  const [breadcrumb, setBreadcrumb] = useState('')

  const router = useRouter()
  const onMenuClick = (e: any) => {
    const { key }: { key: string } = e;
    if (key !== '/') {
      setCurrLink(key.split('/')[1] as LinksKey)
    } else {
      setCurrLink('/')
    }
    router.push(key)
  }

  useEffect(() => {
    location.pathname.split('/')[2] && setCurrLink(location.pathname.split('/')[2] as LinksKey)
  }, [])

  useEffect(() => {
    setBreadcrumb(currLink === '/' ? '首页' : Links[currLink].year + Links[currLink].label)
  }, [currLink])

  return (
    <Layout
      headerProps={{
        extra: {
          customRender: <Nav />
        }
      }}
      style={{
        height: '100vh',
      }}
    >
      <AntdLayout style={{}}>
        <Sider width={240}
          style={{
            overflowY: 'auto',
            overflowX: 'hidden',
            background: '#fff',
            position: 'fixed',
            left: 0,
            top: 56,
            bottom: 0,
            paddingTop: '10px'
          }}
        >
          <Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
            items={menuItems}
            defaultSelectedKeys={[currLink]}
            defaultOpenKeys={[...menuItems?.map(item => item?.key) as Array<string>]}
            onClick={(e) => onMenuClick(e)}
          />
        </Sider>
        <AntdLayout style={{ padding: '0 24px 24px', marginLeft: '240px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{breadcrumb}</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              // padding: 24,
              margin: 0,
              minHeight: 280,
              background: '#fff',

            }}
          >
            {children}
            {currLink !== 'link2' && <footer style={footerStyle}>
              Rustlings Ranking ©2022 Created by <a href="https://github.com/yfblock">yfblock</a>
            </footer>}

          </Content>
        </AntdLayout>
      </AntdLayout>
    </Layout>
  )
}
