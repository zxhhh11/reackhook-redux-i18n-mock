import { Button, Dropdown, Menu } from 'antd'

import Constants from '../redux/constants'
import { IconFont } from '../util/aliIcon'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

const langConfig = [
    {
        value: 'zh_CN',
        name: 'CN 简体中文'
    },
    {
        value: 'zh_HK',
        name: 'HK 繁體中文'
    },
    {
        value: 'en_US',
        name: 'US English'
    },
    {
        value: 'fr_FR',
        name: 'FR Français'
    },
    {
        value: 'ja_JP',
        name: 'JP ロシア語'
    }
]
const LangMenu = () => {
    const dispatch = useDispatch()
    const { t, i18n } = useTranslation()
    const langChange = (value: string) => {
        i18n.changeLanguage(value)
        dispatch({ type: Constants.CHANGE_LANGUAGE, locale: value })
    }
    const menu = (
        <Menu>
            {langConfig.map((item) => {
                return (
                    <Menu.Item key={item.value} onClick={() => langChange(item.value)}>
                        {item.name}
                    </Menu.Item>
                )
            })}
        </Menu>
    )
    return (
        <div>
            <Dropdown overlay={menu} placement="bottomRight">
                <IconFont type="icon-language" />
            </Dropdown>
        </div>
    )
}

export default LangMenu
