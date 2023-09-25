export const Links: {
    [key: string]: MenuLink
} = {
    link1: { key: '/link1', url: "https://learningos.github.io/classroom-grading", label: 'rCore内核排行榜', year: '2022春夏季' }, //2022 夏季os
    link2: { key: '/link2', url: "https://os2edu.cn/ranking/rank", label: 'OS训练营排行榜', year: '2022秋冬季' }, //2022 秋冬季os
    link3: { key: '/link3', url: "https://learningos.github.io/rust-rustlings-ranking", label: 'Rust编程排行榜', year: '2023春夏季' },//2023春夏季 rust
    link4: { key: '/link4', url: "https://learningos.github.io/2023S-OS-uCore-Classroom-Rank-list/", label: 'uCore内核排行榜', year: '2023春夏季' },//2023春夏季 基于C语言的uCore Tutorial ClassRoom排行榜
    link5: { key: '/link5', url: "https://learningos.github.io/2023S-OS-rCore-Classroom-Rank-list/", label: 'rCore内核排行榜', year: '2023春夏季' },//2023春夏季 基于Rust语言的rCore Tutorial ClassRoom排行榜
    link6: { key: '/link6', url: "/", label: 'Rust编程排行榜', year: '2023秋冬季' },
}

export type MenuLink = {
    key: string,
    url: string,
    label: string,
    year: string,
}

export type LinksKey = 'link1' | 'link2' | 'link3' | 'link4' | 'link5' | 'link6';

export const getFormatLinks = () => {
    const res: { [key: string]: Array<MenuLink> } = {}

    for (let key in Links) {
        if (Object.prototype.hasOwnProperty.call(Links, key)) {
            let _key = key as LinksKey
            const element: MenuLink = Links[_key];
            if (!res[element.year]) res[element.year] = []
            res[element.year].push(element)
        }
    }
    return res
}
