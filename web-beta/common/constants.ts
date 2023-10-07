export const Links: {
    [key: string]: MenuLink
} = {
    '2022-spring-rCore': { key: '/2022-spring-rCore', url: "https://learningos.github.io/classroom-grading", label: 'rCore内核排行榜', year: '2022春夏季' }, //2022 夏季os
    '2022-autumn-OS': { key: '/2022-autumn-OS', url: "https://os2edu.cn/ranking/rank", label: 'OS训练营排行榜', year: '2022秋冬季' }, //2022 秋冬季os
    '2023-spring-Rust': { key: '/2023-spring-Rust', url: "https://learningos.github.io/rust-rustlings-ranking", label: 'Rust编程排行榜', year: '2023春夏季' },//2023春夏季 rust
    '2023-spring-uCore': { key: '/2023-spring-uCore', url: "https://learningos.github.io/2023S-OS-uCore-Classroom-Rank-list/", label: 'uCore内核排行榜', year: '2023春夏季' },//2023春夏季 基于C语言的uCore Tutorial ClassRoom排行榜
    '2023-spring-rCore': { key: '/2023-spring-rCore', url: "https://learningos.github.io/2023S-OS-rCore-Classroom-Rank-list/", label: 'rCore内核排行榜', year: '2023春夏季' },//2023春夏季 基于Rust语言的rCore Tutorial ClassRoom排行榜
    '2023-autumn-Rust': { key: '/2023-autumn-Rust', url: "https://os2edu.cn/2023-autumn-os-ranking/", label: 'Rust编程排行榜', year: '2023秋冬季' },
}

export type MenuLink = {
    key: string,
    url: string,
    label: string
    year: string,
}

export type LinksKey = '2022-spring-rCore' | '2022-autumn-OS' | '2023-spring-Rust' | '2023-spring-uCore' | '2023-spring-rCore' | '2023-autumn-Rust';

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
